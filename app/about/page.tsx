import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">About Akrem Jr</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Image
            src="https://sjc.microlink.io/bvEr2UvMr-fYOuJWJdQ0j3iYV7rX0hd5-BsJJ4YlKPiWllAbGbkdsjmhhkHxqIIfQPBZGPwUZmPYSWnHbgLRCw.jpeg"
            alt="Akrem Jr"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <p>
            Welcome to my forex trading portfolio! I&apos;m Akrem Jr, a passionate and experienced forex trader
            based in Ethiopia. With over 5 years of experience in the forex market, I&apos;ve developed a keen
            understanding of market dynamics and a proven track record of success.
          </p>
          <p>
            My journey in forex trading began with a fascination for global economics and a desire to navigate
            the complex world of currency markets. Over the years, I&apos;ve honed my skills in technical
            analysis, fundamental analysis, and risk management, allowing me to consistently identify profitable
            trading opportunities.
          </p>
          <p>
            As a trader, I specialize in major currency pairs and commodity currencies, with a particular focus
            on trend-following strategies and breakout trades. My approach combines rigorous market analysis
            with disciplined risk management, ensuring consistent performance even in volatile market
            conditions.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p>5+ years in Forex Trading</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Specialization</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Technical Analysis, Trend Following</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Certified Financial Technician (CFTe)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}