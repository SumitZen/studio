import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, ShieldCheck, Eye, GraduationCap, Clock } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your professional profile.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Credentials
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified Skills</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+5 in the last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              A log of your recent account activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    &quot;Advanced React Course&quot; was verified.
                  </p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    You uploaded &quot;Cloud Practitioner Certificate&quot;.
                  </p>
                  <p className="text-sm text-muted-foreground">4 days ago</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    Your profile was viewed by a recruiter.
                  </p>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Opportunities</CardTitle>
            <CardDescription>
              AI-powered recommendations based on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/80 border border-border">
                <h4 className="font-semibold">Data Science Pathway</h4>
                <p className="text-sm text-muted-foreground">
                  Based on your &quot;Python Basics&quot; certificate, this
                  learning path could be a great next step.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/80 border border-border">
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
}
