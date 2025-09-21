'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a summary of a user's portfolio.
 *
 * The flow takes a collection of credentials as input and returns a concise summary highlighting the user's key qualifications and experiences.
 *
 * @fileOverview
 * - generatePortfolioSummary - A function that generates a portfolio summary.
 * - GeneratePortfolioSummaryInput - The input type for the generatePortfolioSummary function.
 * - GeneratePortfolioSummaryOutput - The return type for the generatePortfolioSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioSummaryInputSchema = z.object({
  credentials: z
    .string()
    .describe(
      'A string containing a list of credentials, such as certificates, degrees, and achievements.'
    ),
});

export type GeneratePortfolioSummaryInput = z.infer<
  typeof GeneratePortfolioSummaryInputSchema
>;

const GeneratePortfolioSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the portfolio, highlighting key qualifications and experiences.'
    ),
});

export type GeneratePortfolioSummaryOutput = z.infer<
  typeof GeneratePortfolioSummaryOutputSchema
>;

export async function generatePortfolioSummary(
  input: GeneratePortfolioSummaryInput
): Promise<GeneratePortfolioSummaryOutput> {
  return generatePortfolioSummaryFlow(input);
}

const portfolioSummaryPrompt = ai.definePrompt({
  name: 'portfolioSummaryPrompt',
  input: {schema: GeneratePortfolioSummaryInputSchema},
  output: {schema: GeneratePortfolioSummaryOutputSchema},
  prompt: `You are an AI resume writer. Generate a concise summary of the following credentials, highlighting key qualifications and experiences.

Credentials: {{{credentials}}}`,
});

const generatePortfolioSummaryFlow = ai.defineFlow(
  {
    name: 'generatePortfolioSummaryFlow',
    inputSchema: GeneratePortfolioSummaryInputSchema,
    outputSchema: GeneratePortfolioSummaryOutputSchema,
  },
  async input => {
    const {output} = await portfolioSummaryPrompt(input);
    return output!;
  }
);
