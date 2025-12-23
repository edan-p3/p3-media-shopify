'use client';

import React, { useState } from 'react';
import { Calculator, FileText, Target, Package, Users, Shield, Zap, Settings, TrendingUp, Layout, Smartphone, Code, Headphones, Video, Wrench, BookOpen, Award, Layers, Menu, X, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [selectedPackage, setSelectedPackage] = useState('professional');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stripeLinks = {
    starter: 'https://buy.stripe.com/test_your_starter_link',
    growth: 'https://buy.stripe.com/test_your_growth_link',
    professional: 'https://buy.stripe.com/test_your_professional_link',
    advanced: 'https://buy.stripe.com/test_your_advanced_link',
    enterprise: 'https://buy.stripe.com/test_your_enterprise_link',
    premium: 'https://buy.stripe.com/test_your_premium_link',
    platinum: 'https://buy.stripe.com/test_your_platinum_link',
    elite: 'https://buy.stripe.com/test_your_elite_link',
    ultimate: 'https://buy.stripe.com/test_your_ultimate_link'
  };

  const packages = {
    starter: {
      name: 'Starter',
      hours: 10,
      price: 1900,
      features: [
        'Monthly conversion rate audit',
        '1-2 A/B tests implemented',
        'Basic speed optimization',
        'Bug fixes & emergency support',
        'Email support',
        'Monthly performance report'
      ],
      bestFor: 'New stores or small improvements',
      idealRevenue: '$1M-$3M annual revenue'
    },
    growth: {
      name: 'Growth',
      hours: 20,
      price: 3700,
      features: [
        'Everything in Starter',
        '3-4 A/B tests per month',
        'Landing page optimization',
        'Cart drawer improvements',
        'App integration setup',
        'Weekly Slack support',
        'Bi-weekly strategy calls'
      ],
      bestFor: 'Growing stores needing consistent optimization',
      idealRevenue: '$3M-$8M annual revenue',
      popular: true
    },
    professional: {
      name: 'Professional',
      hours: 30,
      price: 5400,
      features: [
        'Everything in Growth',
        '5-6 A/B tests per month',
        'Custom feature development',
        'Complete funnel optimization',
        'Advanced personalization',
        'Priority development queue',
        'Weekly strategy sessions',
        'Dedicated project manager'
      ],
      bestFor: 'Established stores scaling operations',
      idealRevenue: '$8M-$20M annual revenue',
      recommended: true
    },
    advanced: {
      name: 'Advanced',
      hours: 40,
      price: 7200,
      features: [
        'Everything in Professional',
        '7-8 A/B tests per month',
        'Advanced custom features',
        'Multi-channel optimization',
        'Custom integrations',
        'Daily Slack access',
        'Bi-weekly executive reviews'
      ],
      bestFor: 'High-growth stores with complex needs',
      idealRevenue: '$15M-$30M annual revenue'
    },
    enterprise: {
      name: 'Enterprise',
      hours: 50,
      price: 8750,
      features: [
        'Everything in Advanced',
        'Unlimited A/B testing',
        'Advanced custom development',
        'Multi-variant testing program',
        'Custom analytics dashboard',
        'Dedicated senior strategist',
        '24/7 priority support',
        'Executive monthly reviews'
      ],
      bestFor: 'Enterprise stores with aggressive goals',
      idealRevenue: '$20M-$50M annual revenue'
    },
    premium: {
      name: 'Premium',
      hours: 60,
      price: 10500,
      features: [
        'Everything in Enterprise',
        'White-glove service',
        'Multiple concurrent projects',
        'Advanced automation workflows',
        'Headless commerce solutions',
        'C-level strategy partnership',
        'Quarterly business reviews'
      ],
      bestFor: 'Premium brands with complex requirements',
      idealRevenue: '$40M-$75M annual revenue'
    },
    platinum: {
      name: 'Platinum',
      hours: 80,
      price: 13600,
      features: [
        'Everything in Premium',
        'Dedicated development team',
        'Custom app development',
        'Advanced API integrations',
        'International expansion support',
        'Priority feature requests',
        'Monthly executive strategy sessions'
      ],
      bestFor: 'Large-scale operations',
      idealRevenue: '$60M-$100M annual revenue'
    },
    elite: {
      name: 'Elite',
      hours: 100,
      price: 16500,
      features: [
        'Everything in Platinum',
        'Full-time dedicated team',
        'Enterprise-grade infrastructure',
        'Custom platform development',
        'Multi-brand management',
        'Advanced security & compliance',
        'Weekly C-suite alignment calls'
      ],
      bestFor: 'Enterprise brands with maximum needs',
      idealRevenue: '$80M-$150M annual revenue'
    },
    ultimate: {
      name: 'Ultimate',
      hours: 120,
      price: 19800,
      features: [
        'Everything in Elite',
        'Executive partnership program',
        'Unlimited development resources',
        'Global expansion strategy',
        'Advanced AI & ML implementations',
        'Custom technology stack',
        'Board-level reporting'
      ],
      bestFor: 'Fortune 500 & global enterprises',
      idealRevenue: '$100M+ annual revenue'
    }
  };

  const selectedPkg = packages[selectedPackage];

  const services = [
    { icon: Layout, name: 'Custom Theme Development', desc: 'Tailored Shopify theme customization and builds' },
    { icon: TrendingUp, name: 'Conversion Rate Optimization', desc: 'Data-driven CRO strategies and implementation' },
    { icon: Zap, name: 'Performance & Speed Optimization', desc: 'Technical improvements for faster load times' },
    { icon: FileText, name: 'Landing Page Creation', desc: 'High-converting landing page design & development' },
    { icon: Target, name: 'Complete Site Audits', desc: 'Comprehensive analysis with actionable recommendations' },
    { icon: Users, name: 'User Experience Enhancements', desc: 'Optimized user flows and journey mapping' },
    { icon: Shield, name: 'Emergency Technical Support', desc: 'Rapid response for critical site issues' },
    { icon: Settings, name: 'App Integration & Setup', desc: 'Public and private app configuration' },
    { icon: Code, name: 'Custom App Development', desc: 'Bespoke Shopify apps for your unique needs' },
    { icon: Settings, name: 'Workflow Automation', desc: 'Streamline operations with automated processes' },
    { icon: Package, name: 'Subscription & Recurring Revenue', desc: 'Setup for subscription-based products' },
    { icon: TrendingUp, name: 'Upsell Configuration', desc: 'Pre and post-purchase upsell implementations' },
    { icon: Smartphone, name: 'Mobile Responsiveness', desc: 'Optimized experiences across all devices' },
    { icon: Layers, name: 'Process Automation', desc: 'Automated task management and workflows' },
    { icon: Users, name: 'Strategic Consultation', desc: 'Expert guidance and brainstorming sessions' },
    { icon: Video, name: 'Video Call Support', desc: 'Face-to-face strategy and planning meetings' },
    { icon: Wrench, name: 'Technical Troubleshooting', desc: 'Expert diagnosis and resolution of issues' },
    { icon: BookOpen, name: 'Educational Resources', desc: 'Video tutorials and how-to documentation' },
    { icon: Headphones, name: 'Ongoing Technical Support', desc: 'Continuous assistance for all technical needs' },
    { icon: Award, name: 'Custom Feature Development', desc: 'Bespoke functionality tailored to your business' },
    { icon: Code, name: 'Design & Development Services', desc: 'End-to-end creative and technical solutions' }
  ];

  const handlePurchase = (packageKey) => {
    const stripeLink = stripeLinks[packageKey];
    if (stripeLink && !stripeLink.includes('test_your')) {
      window.open(stripeLink, '_blank');
    } else {
      alert('Payment links not configured yet. Please contact us to complete your purchase.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="P3 Media" className="h-12 w-auto" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg" style={{display: 'none'}}>
                <span className="text-2xl font-black">P3</span>
                <span className="text-sm font-light ml-1">MEDIA</span>
              </div>
            </div>
            <nav className="hidden md:flex gap-4">
              <button onClick={() => setActiveTab('calculator')} className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'calculator' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Services</button>
              <button onClick={() => setActiveTab('packages')} className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'packages' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Packages</button>
              <button onClick={() => setActiveTab('proposal')} className={`px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'proposal' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>About</button>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => { setActiveTab('calculator'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'calculator' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Services</button>
              <button onClick={() => { setActiveTab('packages'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'packages' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Packages</button>
              <button onClick={() => { setActiveTab('proposal'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${activeTab === 'proposal' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>About</button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 sm:p-8 lg:p-12 rounded-xl mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">Shopify Growth Partnership</h1>
          <p className="text-lg sm:text-xl opacity-90">Strategic CRO & Managed Development Services</p>
        </div>

        {activeTab === 'calculator' && (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Comprehensive Shopify Services Included</h2>
              <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Every P3 Media package includes access to our full suite of Shopify optimization and development services</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                        <Icon className="text-indigo-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{service.name}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{service.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                <p className="text-center text-gray-700 text-sm sm:text-base">
                  <strong className="text-indigo-600">All services are included in every package.</strong> The number of development hours determines how much we can accomplish each month.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Select Your Service Package</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Choose the package that best fits your store needs and growth goals</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(packages).map(([key, pkg]) => (
                  <button key={key} onClick={() => setSelectedPackage(key)} className={`p-4 rounded-lg border-2 transition text-left ${selectedPackage === key ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="font-bold text-base sm:text-lg mb-1">{pkg.name}</div>
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">${pkg.price.toLocaleString()}<span className="text-xs sm:text-sm text-gray-500">/mo</span></div>
                    <div className="text-xs sm:text-sm text-gray-600">{pkg.hours} hours</div>
                    {pkg.recommended && <div className="text-xs bg-indigo-600 text-white px-2 py-1 rounded mt-2 inline-block">⭐ RECOMMENDED</div>}
                    {pkg.popular && !pkg.recommended && <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded mt-2 inline-block">🔥 POPULAR</div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedPkg.name} Package</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{selectedPkg.bestFor}</p>
                  <p className="text-xs sm:text-sm text-indigo-600 font-semibold">{selectedPkg.idealRevenue}</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-4xl sm:text-5xl font-bold text-indigo-600">${selectedPkg.price.toLocaleString()}<span className="text-xl sm:text-2xl text-gray-500">/mo</span></div>
                  <div className="text-gray-600 mt-2 text-sm sm:text-base">{selectedPkg.hours} development hours included</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Allocated every 30 days</div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">What is Included:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedPkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Shield className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 border-t">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-r-lg mb-6">
                  <p className="text-gray-800 text-sm sm:text-base"><strong className="text-yellow-700">Engagement Terms:</strong> Hours are allocated on a 30-day basis with a minimum 3-month engagement period to ensure optimal results and meaningful progress on your growth initiatives.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2 text-sm sm:text-base">Development Hours</div>
                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600">{selectedPkg.hours}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Hours per 30-day period</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2 text-sm sm:text-base">Monthly Investment</div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">${selectedPkg.price.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">All-inclusive pricing</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold mb-3">Ready to get started?</h4>
                <p className="mb-4 opacity-90 text-sm sm:text-base">Transform your Shopify store with the {selectedPkg.name} package</p>
                <button onClick={() => handlePurchase(selectedPackage)} className="bg-white text-indigo-600 px-6 sm:px-8 py-3 rounded-lg font-bold hover:shadow-lg transition w-full sm:w-auto flex items-center justify-center gap-2">Purchase Now<ExternalLink size={18} /></button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">All P3 Media Service Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(packages).map(([key, pkg]) => (
                  <div key={key} className={`border-2 rounded-xl p-4 sm:p-6 ${pkg.recommended ? 'border-indigo-500 shadow-xl' : pkg.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                    {pkg.recommended && <div className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">⭐ RECOMMENDED</div>}
                    {pkg.popular && !pkg.recommended && <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">🔥 POPULAR</div>}
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">${pkg.price.toLocaleString()}<span className="text-base sm:text-lg text-gray-500 font-normal">/mo</span></div>
                    <div className="text-sm text-indigo-600 font-semibold mb-3">{pkg.hours} development hours</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-4">{pkg.idealRevenue}</div>
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">What is included:</div>
                      <ul className="space-y-2">
                        {pkg.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Shield size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {pkg.features.length > 4 && <div className="text-sm text-indigo-600 font-semibold mt-2">+{pkg.features.length - 4} more features</div>}
                    </div>
                    <button onClick={() => handlePurchase(key)} className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base flex items-center justify-center gap-2 ${pkg.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 hover:bg-gray-200'}`}>Purchase Now<ExternalLink size={16} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'proposal' && (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3"><Target className="text-indigo-600" size={28} />About P3 Media</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">Your Shopify store has significant untapped revenue potential.</p>
                <p>Based on industry benchmarks, we have identified that strategic conversion rate optimization, user experience improvements, and technical enhancements could increase your revenue by 25-40% within the first 6 months.</p>
                <p><strong className="text-indigo-600">The Reality:</strong> Most Shopify stores convert at 1-3%. Top performers convert at 4-8%. Even a modest 0.5% improvement in conversion rate can translate to hundreds of thousands in additional annual revenue.</p>
                <p><strong>P3 Media closes that gap.</strong> We implement, test, and prove ROI through our strategic development partnerships with elite Shopify Plus experts.</p>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What is Included in Every Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg">
                  <Users className="text-indigo-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2 text-base sm:text-lg">Your Dedicated Team</h4>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-700">
                    <li>• Senior CRO Strategist</li>
                    <li>• Shopify Plus Developers</li>
                    <li>• UX/UI Designer</li>
                    <li>• Project Manager</li>
                    <li>• QA Specialist</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                  <Zap className="text-purple-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2 text-base sm:text-lg">Development Excellence</h4>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-700">
                    <li>• Elite Shopify Platinum Partner</li>
                    <li>• Platinum Partner network</li>
                    <li>• Over 15 years of experience</li>
                    <li>• Supported over 1,000 projects</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                  <Shield className="text-green-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2 text-base sm:text-lg">Our Guarantees</h4>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-700">
                    <li>• Results Guaranteed</li>
                    <li>• Month-to-month billing</li>
                    <li>• Cancel anytime after 3 month engagement or extend</li>
                    <li>• 100% success</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-6 lg:p-8 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Ready to Transform Your Store?</h2>
              <div className="text-center space-y-4">
                <p className="text-lg sm:text-xl">Flexible packages from $1,900 to $19,800/month</p>
                <p className="text-base sm:text-lg opacity-90">No setup fees • Month-to-month billing • Results Guaranteed</p>
                <button onClick={() => setActiveTab('packages')} className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl transition mt-4">View All Packages</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-lg">
                <span className="text-xl sm:text-2xl font-black">P3</span>
                <span className="text-xs sm:text-sm font-light ml-1">MEDIA</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb>
