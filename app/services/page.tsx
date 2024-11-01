import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">My Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Signal Service</CardTitle>
            <CardDescription>Get access to premium trading signals</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              <li>Daily trade signals</li>
              <li>Entry, stop loss, and take profit levels</li>
              <li>Market analysis and rationale</li>
              <li>Real-time updates via Telegram</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Subscribe Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>One-on-One Mentorship</CardTitle>
            <CardDescription>Personalized trading education</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              <li>Tailored learning program</li>
              <li>Live trading sessions</li>
              <li>Strategy development</li>
              <li>Risk management coaching</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Apply Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Market Analysis</CardTitle>
            <CardDescription>In-depth weekly market reports</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              <li>Comprehensive market overview</li>
              <li>Key levels and potential setups</li>
              <li>Economic calendar analysis</li>
              <li>Trend and sentiment analysis</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Access</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}