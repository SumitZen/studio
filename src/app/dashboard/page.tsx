
'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  ShieldCheck,
  GraduationCap,
  Eye,
  Clock,
  Bot,
  Rocket,
  PieChart as PieChartIcon,
} from 'lucide-react';
import { credentials } from '@/lib/data';
import { generatePortfolioSummary } from '@/ai/flows/generate-portfolio-summary';
import { suggestPortfolioImprovements } from '@/ai/flows/suggest-portfolio-improvements';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

export default function DashboardPage() {
  const [summary, setSummary] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [careerGoals, setCareerGoals] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);

  const totalCredentials = credentials.length;
  const verifiedCredentials = credentials.filter(
    (c) => c.status === 'Verified'
  ).length;
  const pendingCredentials = totalCredentials - verifiedCredentials;

  const chartData = [
    { name: 'Verified', value: verifiedCredentials, fill: 'hsl(var(--primary))' },
    { name: 'Pending', value: pendingCredentials, fill: 'hsl(var(--secondary))' },
  ];

  const chartConfig = {
    verified: {
      label: 'Verified',
      color: 'hsl(var(--primary))',
    },
    pending: {
      label: 'Pending',
      color: 'hsl(var(--secondary))',
    },
  } satisfies ChartConfig;

  const recentCredentials = [...credentials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const handleGenerateSummary = async () => {
    setIsSummaryLoading(true);
    setSummary('');
    try {
      const credentialsString = credentials
        .map((c) => `${c.name} issued by ${c.issuer}`)
        .join(', ');
      const result = await generatePortfolioSummary({
        credentials: credentialsString,
      });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      setSummary('Failed to generate summary. Please try again.');
    } finally {
      setIsSummaryLoading(false);
    }
  };

  const handleSuggestImprovements = async () => {
    if (!careerGoals) {
      setSuggestions('Please enter your career goals first.');
      return;
    }
    setIsSuggestionsLoading(true);
    setSuggestions('');
    try {
      const credentialsString = credentials
        .map((c) => `${c.name} issued by ${c.issuer}`)
        .join(', ');
      const result = await suggestPortfolioImprovements({
        credentials: credentialsString,
        careerGoals,
      });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error('Error suggesting improvements:', error);
      setSuggestions('Failed to get suggestions. Please try again.');
    } finally {
      setIsSuggestionsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your professional profile.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Credentials
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCredentials}</div>
            <p className="text-xs text-muted-foreground">
              {totalCredentials > 0
                ? '+1 from last month'
                : 'No credentials yet'}
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Verified Skills
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{verifiedCredentials}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalCredentials} total
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+5 in the last week</p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Learning Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">
              Tracked from courses
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>AI-Powered Insights</CardTitle>
            <CardDescription>
              Use AI to get insights into your professional portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Generate Portfolio Summary
              </h4>
              <Button onClick={handleGenerateSummary} disabled={isSummaryLoading}>
                {isSummaryLoading ? 'Generating...' : 'Generate Summary'}
              </Button>
              {summary && (
                <div className="p-4 rounded-lg bg-secondary/80 border border-border">
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                Suggest Portfolio Improvements
              </h4>
              <Textarea
                placeholder="Enter your career goals (e.g., 'Become a Senior Frontend Developer at a FAANG company')"
                value={careerGoals}
                onChange={(e) => setCareerGoals(e.target.value)}
              />
              <Button
                onClick={handleSuggestImprovements}
                disabled={isSuggestionsLoading}
              >
                {isSuggestionsLoading ? 'Analyzing...' : 'Get Suggestions'}
              </Button>
              {suggestions && (
                <div className="p-4 rounded-lg bg-secondary/80 border border-border whitespace-pre-line">
                  <p className="text-sm text-muted-foreground">{suggestions}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Credential Status</CardTitle>
            <CardDescription>
              A visual breakdown of your credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span>Verified</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span>Pending</span>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              A log of your recent account activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentCredentials.length > 0 ? (
              <ul className="space-y-4">
                {recentCredentials.map((credential, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        You added &quot;{credential.name}&quot;.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(credential.date).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No recent activity.
              </p>
            )}
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>Opportunities</CardTitle>
            <CardDescription>
              AI-powered recommendations based on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/80 border border-border transition-all duration-300 hover:bg-secondary">
                <h4 className="font-semibold">Data Science Pathway</h4>
                <p className="text-sm text-muted-foreground">
                  Based on your &quot;Python Basics&quot; certificate, this
                  learning path could be a great next step.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/80 border border-border transition-all duration-300 hover:bg-secondary">
                <h4 className="font-semibold">Frontend Developer Role</h4>
                <p className="text-sm text-muted-foreground">
                  A job opportunity at Tech Solutions Inc. matches your
                  verified React skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

    