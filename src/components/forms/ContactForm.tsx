'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    isResearchConfirmed: boolean;
};

export const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const FORMSPREE_URL = "https://formspree.io/f/xpqjkqgk";

            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    research_confirmed: data.isResearchConfirmed ? "Confirmed" : "Not Confirmed"
                })
            });

            if (response.ok) {
                setSubmitSuccess(true);
                reset();
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error('Submission error:', error);
            setErrorMessage("Server error. Please try again later or email us directly.");
        } finally {
            setIsSubmitting(false);
        }

        setTimeout(() => setSubmitSuccess(false), 8000);
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-4xl border border-secondary-200 shadow-2xl shadow-primary-900/10">
            {submitSuccess ? (
                <div className="py-12 text-center animate-fade-in">
                    <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full mb-6">
                        <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-extrabold text-secondary-900 mb-2">Message Sent Successfully</h3>
                    <p className="text-secondary-700 font-medium text-lg">A research specialist will contact you shortly.</p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="mt-8 text-primary-700 font-black hover:text-primary-800 underline underline-offset-4"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-black text-secondary-900 uppercase tracking-widest mb-3">Full Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className={`w-full px-5 py-4 rounded-2xl bg-secondary-50 border-2 transition-all outline-none focus:ring-0 focus:border-primary-600 font-bold text-secondary-950 placeholder:text-secondary-400 ${errors.name ? 'border-red-400' : 'border-secondary-200'
                                    }`}
                                placeholder="Dr. John Smith"
                            />
                            {errors.name && <span className="text-sm font-bold text-red-600 mt-2 block">{errors.name.message}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-black text-secondary-900 uppercase tracking-widest mb-3">Institutional Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                })}
                                className={`w-full px-5 py-4 rounded-2xl bg-secondary-50 border-2 transition-all outline-none focus:ring-0 focus:border-primary-600 font-bold text-secondary-950 placeholder:text-secondary-400 ${errors.email ? 'border-red-400' : 'border-secondary-200'
                                    }`}
                                placeholder="jsmith@university.edu"
                            />
                            {errors.email && <span className="text-sm font-bold text-red-600 mt-2 block">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-black text-secondary-900 uppercase tracking-widest mb-3">Subject</label>
                        <div className="relative">
                            <select
                                {...register("subject", { required: "Please select a subject" })}
                                className="w-full px-5 py-4 rounded-2xl bg-secondary-50 border-2 border-secondary-200 outline-none focus:ring-0 focus:border-primary-600 transition-all appearance-none font-bold text-secondary-950"
                            >
                                <option value="">Select a reason for contact</option>
                                <option value="Product Catalog Inquiry">Product Catalog Inquiry</option>
                                <option value="Bulk Order Request">Bulk Order Request</option>
                                <option value="COA / Testing Request">COA / Testing Request</option>
                                <option value="Technical Specification">Technical Specification</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary-500">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-black text-secondary-900 uppercase tracking-widest mb-3">Research Inquiry Details</label>
                        <textarea
                            {...register("message", { required: "Please provide some details", minLength: { value: 10, message: "Too short" } })}
                            rows={5}
                            className={`w-full px-5 py-4 rounded-2xl bg-secondary-50 border-2 transition-all outline-none focus:ring-0 focus:border-primary-600 font-bold text-secondary-950 placeholder:text-secondary-400 ${errors.message ? 'border-red-400' : 'border-secondary-200'
                                }`}
                            placeholder="Tell us about your research requirements..."
                        ></textarea>
                        {errors.message && <span className="text-sm font-bold text-red-600 mt-2 block">{errors.message.message}</span>}
                    </div>

                    <div className="p-6 bg-primary-50 rounded-2xl border-2 border-primary-100">
                        <label className="flex items-start space-x-4 cursor-pointer">
                            <input
                                type="checkbox"
                                {...register("isResearchConfirmed", { required: "You must confirm this" })}
                                className="mt-1 h-5 w-5 rounded border-primary-300 text-primary-700 focus:ring-primary-600 cursor-pointer"
                            />
                            <span className="text-sm text-primary-900 leading-relaxed font-bold italic">
                                I confirm that I am a qualified researcher/professional and that all materials
                                requested are strictly for LABORATORY AND RESEARCH USE ONLY.
                            </span>
                        </label>
                        {errors.isResearchConfirmed && <span className="text-sm font-bold text-red-600 mt-2 block">Confirmation is required</span>}
                    </div>

                    {errorMessage && (
                        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 font-bold text-sm animate-pulse">
                            {errorMessage}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full py-6 text-xl font-black rounded-2xl shadow-xl shadow-primary-900/10 transition-transform active:scale-[0.98]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing Inquiry...
                            </span>
                        ) : "Submit Research Inquiry"}
                    </Button>
                </form>
            )}
        </div>
    );
};
