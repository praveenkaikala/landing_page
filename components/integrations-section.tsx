const integrations = [
  { name: "Google Workspace", logo: "/google-logo.png" },
  { name: "Slack", logo: "/slack-logo.png" },
  { name: "Zapier", logo: "/zapier-logo.png" },
  { name: "HubSpot", logo: "/hubspot-logo.png" },
  { name: "Salesforce", logo: "/salesforce-logo.png" },
  { name: "Microsoft", logo: "/microsoft-logo.png" },
  { name: "Zoom", logo: "/zoom-logo.jpg" },
  { name: "Mailchimp", logo: "/mailchimp-logo.png" },
]

export function IntegrationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Integrates with your favorite tools
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"Connect CRMFlow with the tools you already use to create a seamless workflow."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-card/50 border border-border/40 hover:bg-card/80 transition-colors w-full h-20"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className="max-h-8 max-w-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
