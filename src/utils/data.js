// ============================================
// SWARAJ ENTERPRISES - COMPLETE WEBSITE DATA
// ============================================

export const CONTACT_INFO = {
  name: "Swaraj Enterprises & Legal Solutions",
  tagline: "Everything Under One Roof",
  primaryPhone: "8424070609",
  primaryName: "Ismail Ansari",
  secondaryPhone: "9960586058",
  secondaryName: "Suyog",
  email: "rihannpfft12@gmail.com",
  address: "465/7 Gala No 11, Sairaj Apartment, Opp. State Bank of India, Old Jakat Naka, Bhiwandi, District Thane, Maharashtra 421308",
  workingHours: "Mon-Sat: 9:00 AM - 7:00 PM",
  googleMapsEmbed: "https://maps.google.com/maps?q=465/7%20Gala%20No%2011%2C%20Sairaj%20Apartment%2C%20Opp.%20State%20Bank%20of%20India%2C%20Old%20Jakat%20Naka%2C%20Bhiwandi%2C%20District%20Thane%2C%20Maharashtra%20421308&t=&z=15&ie=UTF8&iwloc=&output=embed"
}

export const TRUST_BADGES = [
  { icon: "Award", text: "10+ Years Experience" },
  { icon: "Scale", text: "High Court Practice" },
  { icon: "Users", text: "5000+ Happy Clients" },
  { icon: "TrendingUp", text: "99% Success Rate" }
]

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/documents", label: "Docs" },
  { href: "/fees", label: "Fees" },
  { href: "/blog", label: "Articles" },
  { href: "/faq", label: "FAQ" },
  { href: "/appointment", label: "Book" },
  { href: "/contact", label: "Contact" }
]

export const ALL_SERVICES = [
  { id: "logistics-consultancy", name: "Logistics Business Consultancy", category: "Logistics & Online", icon: "Truck", description: "Expert consultancy for logistics business setup and operations. Complete guidance for transport business registration, fleet management, and compliance.", price: "₹1,500+", processingTime: "5-7 Days", documents: ["Business Plan", "PAN Card", "Aadhaar Card", "Address Proof", "Bank Account Details"], features: ["Fleet Management Consultancy", "Transport License Assistance", "Route Planning", "Compliance Support"] },
  { id: "pan-card", name: "PAN Card", category: "Logistics & Online", icon: "IdCard", description: "New PAN card application and correction services. Get your PAN card delivered to your doorstep.", price: "₹150+", processingTime: "3-5 Days", documents: ["Aadhaar Card", "Proof of Address", "Passport Size Photo", "Date of Birth Proof"], features: ["New PAN Application", "PAN Card Correction", "Lost PAN Reprint", "E-PAN Download"] },
  { id: "online-services", name: "Online Services", category: "Logistics & Online", icon: "Globe", description: "Various online form filling and application services for government and private portals.", price: "₹100+", processingTime: "1-3 Days", documents: ["As per service requirement"], features: ["Form Filling Assistance", "Document Upload Help", "Application Tracking", "Status Updates"] },
  { id: "election-nomination", name: "Election Nomination Form", category: "Logistics & Online", icon: "Vote", description: "Election nomination form filling and submission assistance for local, state, and general elections.", price: "₹500+", processingTime: "2-3 Days", documents: ["Voter ID Card", "PAN Card", "Address Proof", "Photographs"], features: ["Form Filling", "Document Verification", "Submission Assistance", "Election Guidance"] },
  
  { id: "gst-registration", name: "GST Registration", category: "GST & Tax", icon: "FileText", description: "Complete GST registration for businesses and professionals. Get your GSTIN within 7 days.", price: "₹1,500+", processingTime: "5-7 Days", documents: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Account Statement", "Passport Size Photo"], features: ["New GST Registration", "GST Amendment", "GST Cancellation", "GST Consultancy"] },
  { id: "gst-filing", name: "Goods & Service Tax (GST)", category: "GST & Tax", icon: "Receipt", description: "GST return filing, amendments, and compliance services for all types of businesses.", price: "₹500/month", processingTime: "Monthly", documents: ["GST Credentials", "Sales/Purchase Invoices", "Bank Statements"], features: ["GSTR-1 Filing", "GSTR-3B Filing", "GSTR-9 Annual Return", "GST Audit Support"] },
  { id: "itr-filing", name: "Income Tax Return (ITR Filing)", category: "GST & Tax", icon: "TrendingUp", description: "Income tax return filing for individuals, businesses, and professionals. Maximize your refund.", price: "₹499+", processingTime: "3-5 Days", documents: ["PAN Card", "Aadhaar Card", "Form 16", "Bank Statements", "Investment Proofs"], features: ["ITR-1 to ITR-7 Filing", "Tax Planning", "Refund Tracking", "Notice Response"] },
  { id: "tds-return", name: "TDS Return", category: "GST & Tax", icon: "Calculator", description: "TDS return filing and compliance services for businesses and individuals.", price: "₹500+", processingTime: "3-5 Days", documents: ["TAN Number", "PAN Card", "TDS Payment Challans", "Salary/Contract Details"], features: ["Form 24Q Filing", "Form 26Q Filing", "TDS Certificate Issuance", "TDS Reconciliation"] },
  
  { id: "passport-seva", name: "Passport Seva", category: "Government Documents", icon: "Passport", description: "Passport application, renewal, and appointment booking assistance. Complete document verification support.", price: "₹500+", processingTime: "5-10 Days", documents: ["Aadhaar Card", "Address Proof", "Date of Birth Proof", "Passport Photos", "Previous Passport (if renewal)"], features: ["Online Application", "Appointment Booking", "Document Verification", "Police Verification Follow-up"] },
  { id: "food-licence", name: "Food Licence", category: "Government Documents", icon: "Utensils", description: "FSSAI food license registration and renewal for restaurants, food businesses, and manufacturers.", price: "₹2,000+", processingTime: "7-10 Days", documents: ["PAN Card", "Aadhaar Card", "Shop Address Proof", "Food Safety Management Plan", "Passport Size Photos"], features: ["FSSAI Registration", "State License", "Central License", "License Renewal"] },
  { id: "aaple-sarkar", name: "Aaple Sarkar", category: "Government Documents", icon: "Building2", description: "Maharashtra government online services portal assistance for certificates and documents.", price: "₹200+", processingTime: "2-5 Days", documents: ["Aadhaar Card", "Ration Card", "Address Proof", "As per certificate requirement"], features: ["Income Certificate", "Domicile Certificate", "Caste Certificate", "Birth/Death Certificate"] },
  { id: "e-gazette", name: "E-Gazette", category: "Government Documents", icon: "Newspaper", description: "E-gazette publication for name change, address change, and other legal notifications.", price: "₹1,500+", processingTime: "10-15 Days", documents: ["Affidavit", "Newspaper Publication", "Identity Proof", "Address Proof"], features: ["Name Change Gazette", "Address Change Gazette", "Spelling Correction", "Publication Certificate"] },
  
  { id: "e-registration", name: "E-Registration", category: "Business Registrations", icon: "Laptop", description: "Online registration services for various business and government registrations.", price: "₹300+", processingTime: "2-4 Days", documents: ["As per registration type"], features: ["MSME Registration", "Udyam Registration", "NSIC Registration", "Startup India Registration"] },
  { id: "company-registration", name: "Company Registration", category: "Business Registrations", icon: "Building", description: "Private Limited, LLP, Partnership, and OPC registration with MCA.", price: "₹8,000+", processingTime: "10-15 Days", documents: ["PAN Card (All Directors)", "Aadhaar Card (All Directors)", "Address Proof", "Registered Office Proof", "Digital Signature"], features: ["Pvt Ltd Registration", "LLP Registration", "Partnership Registration", "OPC Registration"] },
  { id: "trademark-iso", name: "Trade Mark & ISO Certification", category: "Business Registrations", icon: "Award", description: "Trademark registration and ISO certification for brand protection and quality standards.", price: "₹5,000+", processingTime: "15-20 Days", documents: ["Logo/Brand Name", "Business Registration Proof", "User Affidavit", "Power of Attorney"], features: ["Trademark Search", "Trademark Application", "ISO 9001 Certification", "ISO 14001 Certification"] },
  { id: "shop-act", name: "Shop Act Licence", category: "Business Registrations", icon: "Store", description: "Shop & Establishment Act license for shops, restaurants, offices, and commercial establishments.", price: "₹800+", processingTime: "5-7 Days", documents: ["Aadhaar Card", "PAN Card", "Shop Address Proof", "Passport Size Photo", "Rent Agreement"], features: ["New Shop Act Registration", "Shop Act Renewal", "Amendment Services", "Labour Law Compliance"] },
  { id: "digital-signature", name: "Digital Signature", category: "Business Registrations", icon: "Signature", description: "Class 2 and Class 3 Digital Signature Certificates for online document signing.", price: "₹1,200+", processingTime: "1-2 Days", documents: ["PAN Card", "Aadhaar Card", "Passport Size Photo", "Mobile/Email ID"], features: ["Class 2 DSC", "Class 3 DSC", "DGFT DSC", "MCA DSC"] },
  
  { id: "property-registration", name: "Property Registration", category: "Property & Legal", icon: "Home", description: "Sale deed, gift deed, and property registration services with Sub-Registrar office.", price: "₹2,000+", processingTime: "3-7 Days", documents: ["Sale Deed Draft", "PAN Card (Buyer & Seller)", "Aadhaar Card", "Passport Size Photos", "Property Tax Receipt"], features: ["Sale Deed Registration", "Gift Deed Registration", "Mortgage Deed", "Lease Deed"] },
  { id: "revenue-consonant", name: "Revenue Consonant", category: "Property & Legal", icon: "FileCheck", description: "Revenue department document assistance and certification.", price: "₹1,000+", processingTime: "5-10 Days", documents: ["Land Documents", "7/12 Extract", "8A Extract", "Property Card"], features: ["Revenue Record Update", "Mutation Entry", "Name Transfer", "Survey Number Verification"] },
  { id: "bhumiabhilekh", name: "Bhumiabhilekh", category: "Property & Legal", icon: "Map", description: "Land record documentation and verification services.", price: "₹500+", processingTime: "3-5 Days", documents: ["Survey Number", "Village Details", "Owner Details"], features: ["7/12 Extract", "8A Extract", "Property Card", "Land Map"] },
  { id: "land-management", name: "Land Management", category: "Property & Legal", icon: "LandPlot", description: "Land management and documentation services for agricultural and non-agricultural land.", price: "₹1,000+", processingTime: "5-7 Days", documents: ["Land Documents", "7/12 Extract", "Owner Identity Proof"], features: ["Land Survey", "Land Division", "Land Conversion", "NA Permission"] },
  { id: "land-record", name: "Land Record", category: "Property & Legal", icon: "Archive", description: "7/12 extract, 8A extract, and mutation entry services.", price: "₹500+", processingTime: "3-5 Days", documents: ["Survey Number", "Owner PAN/Aadhaar"], features: ["7/12 Utara", "8A Extract", "Mutation Entry", "Feri Farfar"] },
  { id: "cast-validity", name: "Cast Validity", category: "Property & Legal", icon: "Shield", description: "Caste certificate validity documentation and verification.", price: "₹1,500+", processingTime: "15-30 Days", documents: ["Caste Certificate", "School Leaving Certificate", "Income Proof", "Address Proof"], features: ["Caste Validity Application", "Document Verification", "Committee Hearing Support", "Validity Certificate"] },
  { id: "marriage-registration", name: "Marriage Registration", category: "Property & Legal", icon: "Heart", description: "Marriage registration under Hindu Marriage Act or Special Marriage Act.", price: "₹1,500+", processingTime: "5-10 Days", documents: ["Marriage Invitation", "Wedding Photos", "Witness ID Proofs", "PAN/Aadhaar of Couple"], features: ["Hindu Marriage Registration", "Special Marriage Act Registration", "Court Marriage Assistance", "Marriage Certificate"] },
  { id: "leave-licence", name: "Leave and Licence", category: "Property & Legal", icon: "FileSignature", description: "Leave and license agreement drafting and registration for rental properties.", price: "₹1,000+", processingTime: "3-5 Days", documents: ["Property Documents", "Owner PAN/Aadhaar", "Tenant PAN/Aadhaar", "Rent Details"], features: ["Agreement Drafting", "Notarization", "Registration", "Renewal Services"] },
  
  { id: "labour-licence", name: "Labour Contractor Licence", category: "Licenses & Permits", icon: "Users", description: "Labour contractor license registration and renewal for construction and industrial projects.", price: "₹3,000+", processingTime: "10-15 Days", documents: ["PAN Card", "Aadhaar Card", "Business Registration", "Address Proof", "Bank Account Details"], features: ["Contractor Registration", "License Renewal", "Compliance Support", "Annual Returns"] },
  { id: "mpcb", name: "Pollution Control Board (MPCB)", category: "Licenses & Permits", icon: "Factory", description: "MPCB/NOC certificate for industries, factories, and commercial establishments.", price: "₹5,000+", processingTime: "15-20 Days", documents: ["Factory Address Proof", "PAN Card", "Aadhaar Card", "Project Report", "Site Plan"], features: ["Consent to Establish", "Consent to Operate", "CTE/CTO Application", "Environmental Clearance"] },
  { id: "election-management", name: "Election Management", category: "Licenses & Permits", icon: "Vote", description: "Election campaign and management services for candidates and political parties.", price: "Contact Us", processingTime: "Varies", documents: ["Candidate Details", "Party Affiliation", "Voter List", "Campaign Materials"], features: ["Campaign Strategy", "Voter Outreach", "Nomination Filing", "Election Day Support"] },
  { id: "iec-code", name: "Import Export Code (IEC Code Registration)", category: "Licenses & Permits", icon: "Globe", description: "IEC code for import/export businesses required by DGFT.", price: "₹1,500+", processingTime: "3-5 Days", documents: ["PAN Card", "Aadhaar Card", "Bank Account Details", "Address Proof", "GST Certificate"], features: ["New IEC Application", "IEC Modification", "IEC Cancellation", "IEC Renewal"] }
]

export const FEES_DATA = {
  logistics: [
    { name: "Logistics Business Consultancy", price: "₹1,500+" },
    { name: "PAN Card", price: "₹150+" },
    { name: "Online Services", price: "₹100+" },
    { name: "Election Nomination Form", price: "₹500+" }
  ],
  tax: [
    { name: "GST Registration", price: "₹1,500+" },
    { name: "GST Return Filing", price: "₹500/month" },
    { name: "ITR Filing – Salaried", price: "₹499+" },
    { name: "ITR Filing – Business", price: "₹1,500+" },
    { name: "TDS Return", price: "₹500+" }
  ],
  government: [
    { name: "Passport Assistance", price: "₹500+" },
    { name: "Food Licence (FSSAI)", price: "₹2,000+" },
    { name: "Aaple Sarkar Services", price: "₹200+" },
    { name: "E-Gazette", price: "₹1,500+" }
  ],
  registration: [
    { name: "E-Registration", price: "₹300+" },
    { name: "Company Registration (Pvt Ltd)", price: "₹8,000+" },
    { name: "Trade Mark Registration", price: "₹5,000+" },
    { name: "ISO Certification", price: "₹5,000+" },
    { name: "Shop Act Licence (Gumasta)", price: "₹800+" },
    { name: "Digital Signature (DSC)", price: "₹1,200+" }
  ],
  legal: [
    { name: "Property Registration", price: "₹2,000+" },
    { name: "Revenue Consonant", price: "₹1,000+" },
    { name: "Bhumiabhilekh", price: "₹500+" },
    { name: "Land Management", price: "₹1,000+" },
    { name: "Land Record (7/12, 8A)", price: "₹500+" },
    { name: "Cast Validity", price: "₹1,500+" },
    { name: "Marriage Registration", price: "₹1,500+" },
    { name: "Leave & Licence Agreement", price: "₹1,000+" }
  ],
  licenses: [
    { name: "Labour Contractor Licence", price: "₹3,000+" },
    { name: "Pollution Control Board (MPCB)", price: "₹5,000+" },
    { name: "Election Management", price: "Contact Us" },
    { name: "Import Export Code (IEC)", price: "₹1,500+" }
  ]
}

export const TESTIMONIALS = [
  { name: "Ramesh Patil", location: "Bhiwandi", text: "Property registration mein bahut help mili. Sab documents ready karwa diye aur registration ke din seedha office le gaye. Bahut smooth process tha.", rating: 5, service: "Property Registration" },
  { name: "Mohammed Shaikh", location: "Bhiwandi", text: "GST registration bahut jaldi ho gayi — sirf 4 din mein! Fees bhi reasonable thi. Ab monthly return bhi yahi se file karta hun.", rating: 5, service: "GST Registration" },
  { name: "Priya Deshmukh", location: "Thane", text: "ITR file karna tha par samajh nahi aa raha tha. Yahan se bahut achhe se samjhaya aur file kiya. Refund bhi jaldi aaya.", rating: 5, service: "ITR Filing" },
  { name: "Suresh Kamble", location: "Bhiwandi", text: "Marriage registration ke liye aaya tha. Sab documents ki list pehle de di, kuch bhi miss nahi hua. Bahut professional service!", rating: 5, service: "Marriage Registration" },
  { name: "Aashish Gaikwad", location: "Bhiwandi", text: "Mera 7/12 record mein naam galat tha. Yahan se ek hi baar mein ho gaya. Bahut helpful staff hai!", rating: 5, service: "Land Records" },
  { name: "Vikram Joshi", location: "Kalyan", text: "Company registration ke liye aaya. Bahut detailed guidance mili — 10 din mein company register ho gayi. Excellent service!", rating: 5, service: "Company Registration" },
  { name: "Farhan Qureshi", location: "Bhiwandi", text: "Passport ke liye aaya tha, appointment book karne mein problem aa rahi thi. Inlogan ne seedha help di — bahut achha experience.", rating: 5, service: "Passport" },
  { name: "Neha Sharma", location: "Bhiwandi", text: "Shop Act licence aur GST dono ek saath karwaya. Time bhi bacha aur paisa bhi. WhatsApp pe poori guidance di!", rating: 5, service: "Shop Act + GST" },
  { name: "Kavita More", location: "Bhiwandi", text: "Income certificate aur domicile certificate dono ek hi din mein apply ho gaye. Bahut transparent aur honest service.", rating: 5, service: "Aaple Sarkar" }
]

export const FAQS = [
  { cat: "property", q: "Property registration mein kitna time lagta hai?", a: "Normal registration 1-3 working days mein hoti hai. Pehle stamp duty pay karni hoti hai, phir Sub-Registrar ke paas jaake registration hoti hai." },
  { cat: "property", q: "Property registration ke liye stamp duty kitni hoti hai?", a: "Maharashtra mein stamp duty generally property value ka 5-6% hoti hai (women ke naam par 1% kam). Plus 1% registration fees alag se hoti hai." },
  { cat: "property", q: "Kya property registration online ho sakti hai?", a: "Online payment (stamp duty) ho sakti hai lekin physical presence Sub-Registrar office mein zaroor chahiye." },
  { cat: "gst", q: "GST registration kab zaroor hai?", a: "Agar aapka annual turnover 20 lakh (services) ya 40 lakh (goods) se zyada hai toh GST registration mandatory hai." },
  { cat: "gst", q: "GST registration kitne din mein hoti hai?", a: "Documents sahi hone par 3-7 working days mein GST registration complete ho jaati hai." },
  { cat: "gst", q: "GST return file karne ki last date kab hoti hai?", a: "GSTR-1 (monthly): 11 tarikh tak. GSTR-3B (monthly): 20 tarikh tak. Late filing par penalty lagti hai." },
  { cat: "gst", q: "GST return file na karne par kya hoga?", a: "Late fees ₹50/day (CGST+SGST = ₹100/day) lagti hai. Plus 18% interest bhi lag sakta hai." },
  { cat: "itr", q: "ITR file karne ki last date kab hoti hai?", a: "Salaried individuals ke liye usually July 31. Business owners ke liye (audit required) October 31." },
  { cat: "itr", q: "Kya ITR file karna mandatory hai?", a: "Agar income basic exemption limit se zyada hai (₹3 lakh, FY 2024-25) toh mandatory hai." },
  { cat: "itr", q: "Form 16 nahi mila toh ITR kaise file karein?", a: "Form 26AS aur AIS (Annual Information Statement) se bhi ITR file ho sakti hai." },
  { cat: "legal", q: "Affidavit kya hota hai aur kab chahiye?", a: "Affidavit ek sworn statement hota hai jo notary ke saamne sign kiya jaata hai. Income proof, name change, residence proof ke liye use hota hai." },
  { cat: "legal", q: "Marriage registration ke liye witnesses kitne chahiye?", a: "2 witnesses zaroor chahiye. Dono witnesses ko registration ke waqt physically present hona padega." },
  { cat: "legal", q: "Power of Attorney kya hoti hai?", a: "Power of Attorney (POA) ek legal document hai jisme aap kisi aur ko apni jagah kaam karne ka adhikar dete hain." },
  { cat: "documents", q: "PAN card mein naam change kaise hota hai?", a: "Shadi ke baad naam change ke liye marriage certificate chahiye. Form 49A fill karke submit karna hota hai." },
  { cat: "documents", q: "Passport ke liye police verification hoti hai kya?", a: "Haan, fresh passport ke liye police verification mandatory hai. Tatkal mein post-verification hoti hai." },
  { cat: "digital", q: "Digital Signature Certificate (DSC) kya hota hai?", a: "DSC ek electronic signature hai jo government portals pe documents digitally sign karne ke liye use hota hai." },
  { cat: "digital", q: "Udyam registration kya hai aur kisko karna chahiye?", a: "Udyam registration MSME (Micro, Small, Medium Enterprises) ke liye hota hai. Small business owners kar sakte hain." },
  { cat: "documents", q: "Domicile certificate kya kaam aata hai?", a: "Domicile certificate prove karta hai ki aap Maharashtra ke resident hain. Government jobs, college admissions ke liye zaroori hai." }
]

export const BLOG_ARTICLES = [
  { id: "gst", tag: "📊 GST", title: "GST Registration Kaise Karein? — Complete Guide", desc: "Step-by-step guide for GST registration. Documents required, process, timeline — sab kuch simple terms mein.", readTime: "5 min", image: "https://images.unsplash.com/photo-1554774853-9ed9a5e63f89?auto=format&fit=crop&w=900&q=80", content: "<h1>GST Registration Kaise Karein?</h1><p>GST (Goods and Services Tax) ek tax hai jo goods aur services pe lagta hai. July 2017 se GST aaya.</p><h2>GST Registration Kab Zaroori Hai?</h2><ul><li>Annual turnover ₹20 lakh (services) ya ₹40 lakh (goods) se zyada</li><li>Interstate supply karte hain</li><li>E-commerce platform pe sell karte hain</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>⚠️ Note: Turnover limit se kam bhi hai toh bhi GST lena business ke liye faydemand ho sakta hai.</div>" },
  { id: "itr", tag: "💰 ITR", title: "ITR File Karna Kyon Zaroori Hai? — Poori Jankari", desc: "Income Tax Return kya hai, kise file karna chahiye, last date kya hai — simple bhasha mein samjhein.", readTime: "4 min", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", content: "<h1>ITR File Karna Kyon Zaroori Hai?</h1><p>ITR ek form hai jisme aap batate hain ki kitna paisa kamaya aur kitna tax diya.</p><h2>ITR File Karne Ke Fayde</h2><ul><li>Refund milta hai</li><li>Loan approval asaan</li><li>Visa mein help</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Salaried professionals aur business owners dono ke liye important.</div>" },
  { id: "property", tag: "🏠 Property", title: "Bhiwandi Mein Property Registration — Poori Process", desc: "Maharashtra mein property registration kaise hoti hai — stamp duty, documents, fees, time — ek quick overview.", readTime: "6 min", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80", content: "<h1>Bhiwandi Mein Property Registration</h1><h2>Stamp Duty Kitni Hoti Hai?</h2><ul><li>Maharashtra mein 5% stamp duty (purush)</li><li>Mahila ke naam par 4%</li><li>Plus 1% registration fees</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Hum draft se lekar registration tak sab kuch handle karte hain.</div>" },
  { id: "shopact", tag: "🏪 Business", title: "Shop Act Licence (Gumasta) Kya Hai aur Kaise Milega?", desc: "Maharashtra mein har dukan ke liye Shop Act zaroori hai. Kaise apply karein, kya documents chahiye.", readTime: "3 min", image: "https://images.unsplash.com/photo-1531379410500-6e5caad4a26a?auto=format&fit=crop&w=900&q=80", content: "<h1>Shop Act Licence (Gumasta) Kya Hai?</h1><h2>Kise Chahiye?</h2><ul><li>Har dukan, restaurant, salon, office</li><li>Home-based business agar employees hain</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Humari service fee ₹800 se shuru.</div>" },
  { id: "pan", tag: "🪪 Documents", title: "PAN Card Kyon Zaroori Hai? Naya PAN Kaise Banwayein?", desc: "PAN card ke bina bank account, loan, property — kuch nahi hoga. Naya PAN ya correction kaise karein.", readTime: "3 min", image: "https://images.unsplash.com/photo-1534515723198-31e50e0d1076?auto=format&fit=crop&w=900&q=80", content: "<h1>PAN Card — Kyun Zaroori, Kaise Banwayein?</h1><h2>PAN Kab Zaroori Hai?</h2><ul><li>Bank account ke liye</li><li>₹50,000+ transaction ke liye</li><li>Property kharidne/bechne ke liye</li><li>ITR file karne ke liye</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Hum PAN apply ya correction ₹150 mein kar dete hain.</div>" },
  { id: "passport", tag: "🛂 Digital", title: "Passport Seva — Online Appointment aur Documents Guide", desc: "Passport ke liye online appointment kaise book karein, kya documents chahiye — poori jankari.", readTime: "4 min", image: "https://images.unsplash.com/photo-1533113359634-1ab4a5306c86?auto=format&fit=crop&w=900&q=80", content: "<h1>Passport Seva — Complete Guide</h1><h2>Documents Required</h2><ul><li>Proof of Address (Aadhaar, Voter ID, Electricity Bill)</li><li>Proof of Date of Birth (Birth Certificate, 10th Marksheet)</li><li>Identity Proof (PAN Card, Voter ID)</li><li>Passport size photos (2 copies)</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Hum appointment se lekar document verification tak sab karte hain.</div>" },
  { id: "aadhaar-update", tag: "🆔 Aadhaar", title: "Aadhaar Update Kaise Karein? — Fast Guide", desc: "Aadhaar details update karna hai? Online aur offline dono process clear tarike se samjhein.", readTime: "4 min", image: "https://images.unsplash.com/photo-1581090462208-a0e196705f99?auto=format&fit=crop&w=900&q=80", content: "<h1>Aadhaar Update Kaise Karein?</h1><h2>Online Update Steps</h2><ul><li>UIDAI website pe login karein</li><li>Update request submit karein</li><li>OTP verify karein</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Address, mobile, ya name update process ab tezi se complete kar sakte hain.</div>" },
  { id: "udyam-registration", tag: "🏢 MSME", title: "Udyam Registration Ke Fayde aur Kaise Karein", desc: "Udyam registration se kya benefits milte hain aur process kaise complete hota hai — startup aur small business ke liye guide.", readTime: "5 min", image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80", content: "<h1>Udyam Registration Ke Fayde</h1><p>Udyam registration ek MSME identity hai jo aapke business ko government support aur benefits dilati hai.</p><h2>Benefits</h2><ul><li>Subsidy aur scheme support</li><li>Loan interest benefits</li><li>Government tenders ke liye eligibility</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Small business ko grow karne ke liye Udyam registration useful rahegi.</div>" },
  { id: "legal-document-tips", tag: "📃 Legal", title: "Legal Document Drafting Tips — Error-Free Papers", desc: "Legal documents banate waqt kaunse points dhyan mein rakhein, kaise mistakes avoid karein — simple tips.", readTime: "5 min", image: "https://images.unsplash.com/photo-1528209397659-029bbd0d3b01?auto=format&fit=crop&w=900&q=80", content: "<h1>Legal Document Drafting Tips</h1><p>Document draft karte waqt clear language, correct dates, aur appropriate signatures sabse zaroori hote hain.</p><h2>Important Points</h2><ul><li>Clear clauses likhein</li><li>Correct party names aur address dhyan se use karein</li><li>Signatures aur witness details complete rakhein</li></ul><div class='bg-gold/10 p-4 rounded-xl my-4'>💡 Ek achhi draft document future disputes se bachane mein madad karti hai.</div>" }
]

export const WHY_CHOOSE_US = [
  { icon: "ShieldCheck", title: "Legal Accuracy", description: "100% error-free documentation & legal backing." },
  { icon: "FileText", title: "One-Stop Solution", description: "All services under one roof – save time & money." },
  { icon: "MessageSquare", title: "24/7 WhatsApp Support", description: "Emergency assistance anytime, even on holidays." }
]

export const SITE_CONFIG = {
  name: "Swaraj Enterprises & Legal Solutions",
  domain: "swarajenterprises.com",
  totalServices: 29,
  established: 2015,
  socialLinks: {
    whatsapp: `https://wa.me/91${CONTACT_INFO.secondaryPhone}`,
    email: `mailto:${CONTACT_INFO.email}`,
    phone: `tel:+91${CONTACT_INFO.primaryPhone}`
  }
}

export const getServiceById = (id) => {
  return ALL_SERVICES.find(service => service.id === id)
}

export const getServicesByCategory = (category) => {
  return ALL_SERVICES.filter(service => service.category === category)
}

export const getAllCategories = () => {
  return [...new Set(ALL_SERVICES.map(service => service.category))]
}
