import {
  Battery,
  Bug,
  Computer,
  Cpu,
  Database,
  Fan,
  HardDrive,
  Laptop,
  MemoryStick,
  Monitor,
  Settings,
  Wrench,
} from "lucide-react";

export const services = [
  {
    slug: "laptop-motherboard-repair-chandigarh",
    title: "Laptop Motherboard Repair in Chandigarh",
    shortTitle: "Motherboard Repair",
    category: "Hardware Repair",
    icon: Cpu,
    image: "/services/motherboardrepair.png",
    tag: "Chip-Level Repair",
    readTime: "Detailed Service",
    metaTitle: "Laptop Motherboard Repair Chandigarh",
    metaDescription:
      "Expert chip-level laptop motherboard repair in Chandigarh Sector 20. Dead laptop, no power, charging IC, short circuit & liquid damage repair by specialists.",
    turnaround: "24 – 48 Hours Bench Diagnostics",
    warranty: "30 – 90 Days Repair Warranty",
    keywords: [
      "laptop motherboard repair Chandigarh",
      "chip level laptop repair Chandigarh",
      "dead laptop repair Chandigarh",
      "laptop no power repair Chandigarh",
      "laptop not turning on Chandigarh",
      "laptop charging IC repair Chandigarh",
      "laptop motherboard short circuit Sector 20",
      "laptop repair in Chandigarh",
    ],
    heroDescription:
      "Advanced chip-level motherboard diagnosis and micro-soldering for dead laptops, no-power faults, charging IC failures, and short circuits in Sector 20-C Chandigarh.",
    introduction:
      "The motherboard is the nerve center of your laptop, interconnecting the central processor, graphics engine, system memory, high-speed storage, and multi-stage power regulation circuitry across high-density multilayer printed circuit boards. When an authorized service center declares a laptop 'dead', their standard procedure is often to quote an exorbitant price for a complete motherboard replacement—often costing up to 60-80% of the entire laptop's value. At LaptopDoc in Sector 20-C Chandigarh, our 16+ years of bench repair experience focuses on component-level micro-soldering. Instead of discarding the entire board, our engineers isolate and replace individual shorted capacitors, blown MOSFETs, failing charging ICs, or corrupted BIOS chips, restoring your laptop at a fraction of replacement cost.",
    problems: [
      "Laptop completely dead with zero LED power indication",
      "Power light turns on but screen remains totally black (no display)",
      "Laptop shuts down abruptly after a few seconds or minutes",
      "Battery not charging even with a known working original adapter",
      "Short circuit causing charger light to blink or trip when connected",
      "Liquid, water, or tea spillage causing internal corrosion",
      "Burning electronic smell or overheating near the power jack",
      "USB ports, audio jack, or keyboard not responding due to PCH faults",
    ],
    sections: [
      {
        heading: "1. Advanced Chip-Level Diagnostics vs Board Swapping",
        content: [
          "Modern laptop motherboards feature multiple regulated power stages that step down the 19V/20V DC adapter voltage into delicate low-voltage rails: 5V always-on, 3.3V standby, 1.8V, 1.05V PCH, and sub-1V VCORE rails for the processor and GPU.",
          "If even a single ceramic bypass capacitor develops an internal short to ground on the main 19V rail, the entire power supply cuts out to prevent fire. Using bench-regulated DC power supplies, thermal infrared cameras, and precision multimeters, our technicians pinpoint the exact faulty component with zero guesswork.",
          "By replacing the microscopic surface-mount component (SMD) rather than the entire board, we save your original factory hardware, data configuration, and thousands of rupees.",
        ],
      },
      {
        heading: "2. Common Motherboard Power Delivery & IC Faults",
        content: [
          "Charging IC Failure: Common management chips (such as BQ247xx, ISL series) control battery charging and power handoff. Voltage spikes or third-party chargers frequently damage these chips, preventing the laptop from recognizing the adapter.",
          "Corrupted BIOS / UEFI Firmware: Frequent Windows update interruptions or power surges can corrupt the SPI flash ROM chip, resulting in a black screen where fans spin but the laptop fails to POST. We desolder and reprogram the BIOS chip using hardware programmers with verified clean manufacturer dumps.",
          "Power MOSFET Failures: High-side and low-side switching MOSFETs in the CPU/GPU VRM stages endure heavy thermal stress. When a MOSFET fails, the motherboard refuses to initialize to protect the processor.",
        ],
      },
      {
        heading: "3. Liquid Damage Ultrasonic Cleaning & Trace Repair",
        content: [
          "Liquid spills (water, coffee, tea, soft drinks) are among the most urgent motherboard emergencies. Liquid acts as a conductor, bridging voltage lines and causing rapid electrolytic corrosion that dissolves copper traces and solder pads.",
          "If you experience a spill, disconnect the charger, never attempt to power the laptop on, and bring it to our Sector 20-C shop immediately. We disassemble the board, remove protective shielding, run it through an ultrasonic cleaning bath with specialized electronic flux-remover, and reconstruct dissolved circuit traces under a stereo microscope.",
        ],
      },
      {
        heading: "4. When Is Motherboard Repair Impractical?",
        content: [
          "While we successfully recover over 80% of motherboard failures, transparent advice is our founding principle. If liquid corrosion has severely delaminated internal PCB copper layers, or if an electrical surge has shorted 19V directly into the core silicon of the main CPU or GPU, component repair may not be reliable.",
          "In such cases, we explain the diagnostic findings with full transparency and assist you with data recovery or cost-effective board replacement options.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does laptop motherboard diagnosis take?",
        answer:
          "Preliminary electrical and short-circuit diagnosis typically takes 24 to 48 hours at our Sector 20-C Chandigarh shop. Once diagnosed, we provide an exact quote before proceeding with any repair.",
      },
      {
        question: "Is motherboard repair safe for my stored data?",
        answer:
          "Yes. Motherboard repairs focus strictly on power and signal circuitry. Your SSD, NVMe drive, or hard disk is safely removed during bench testing, ensuring your files, photos, and operating system remain 100% untouched.",
      },
      {
        question: "What warranty do you provide on motherboard repairs?",
        answer:
          "We provide a 30 to 90 days service warranty on chip-level motherboard repairs covering the specific components and power circuits serviced.",
      },
      {
        question: "Why does my charger light go off when I plug it into the laptop?",
        answer:
          "This is a classic indicator of a major short circuit on the motherboard's main 19V/20V power rail. The charger detects excessive current draw and triggers its internal protection circuit to prevent a fire.",
      },
    ],
    process: [
      "Initial intake & visual microscope inspection",
      "Power rail impedance & short-circuit testing",
      "Transparent fault report & repair estimate",
      "Precision micro-soldering & component replacement",
      "Comprehensive 24-hr bench burn-in stress testing",
    ],
    relatedServices: [
      {
        title: "Battery & Charger Repair",
        href: "/laptop-battery-replacement-chandigarh",
      },
      {
        title: "Laptop Data Recovery",
        href: "/data-recovery-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-screen-replacement-chandigarh",
    title: "Laptop Screen Replacement in Chandigarh",
    shortTitle: "Screen Replacement",
    category: "Display Repair",
    icon: Monitor,
    image: "/services/screenreplacement.png",
    tag: "Display Service",
    metaTitle: "Laptop Screen Replacement Chandigarh",
    metaDescription:
      "Same-day laptop screen replacement in Chandigarh Sector 20. Original LED, IPS, 144Hz & OLED panels for Dell, HP, Lenovo, ASUS, Acer & Apple laptops with warranty.",
    turnaround: "1 – 2 Hours (Same-Day)",
    warranty: "3 – 6 Months Screen Warranty",
    keywords: [
      "laptop screen replacement Chandigarh",
      "laptop display repair Chandigarh",
      "broken laptop screen repair Chandigarh",
      "laptop black screen repair Chandigarh",
      "laptop screen replacement Sector 20",
      "laptop LED screen price Chandigarh",
      "gaming laptop screen 144Hz repair",
      "Dell HP Lenovo screen replacement",
    ],
    heroDescription:
      "Fast, professional laptop screen replacement in Sector 20-C Chandigarh. Genuine IPS, FHD, 144Hz, and OLED panels installed with same-day turnaround.",
    introduction:
      "A cracked, flickering, or non-functioning laptop display severely disrupts your work, study, or entertainment. Laptop screens are complex assemblies containing liquid crystal layers, LED backlights, diffuser sheets, and delicate driver ICs bonded to flexible printed circuits (COF). Because modern screens are ultra-thin and borderless, even a minor drop, closing the lid on a pen, or excessive corner pressure can fracture the glass matrix. At LaptopDoc in Sector 20-C Chandigarh, we maintain an extensive inventory of Grade-A replacement panels—ranging from standard 14-inch and 15.6-inch HD/FHD screens to specialized 144Hz/165Hz gaming displays and slim IPS panels. Most screen replacements are completed within 1 to 2 hours with testing warranty.",
    problems: [
      "Physically cracked glass or spiderweb fracture lines across display",
      "Black screen where laptop boots, fan spins, but display stays dark",
      "Horizontal or vertical colored lines running through the image",
      "Flickering, shaking screen when moving or adjusting the display angle",
      "White pressure bruises, dark blotches, or liquid ink spread",
      "Extremely dim screen where image is faintly visible under flashlight",
      "Dead pixel clusters or stuck bright color dots on the panel",
      "Ghosting, inverted colors, or distorted display artifacts",
    ],
    sections: [
      {
        heading: "1. Panel Types, Resolutions & Refresh Rates Supported",
        content: [
          "Not all laptop screens are created equal. Installing an incompatible panel can cause backlight failure, washed-out colors, or flickering.",
          "Panel Technology: We stock high-contrast IPS (In-Plane Switching) panels for wide viewing angles and vivid color reproduction, as well as high-refresh TN/IPS gaming panels.",
          "Resolution Standards: We support HD (1366x768), Full HD (1920x1080), 2K/QHD (2560x1440), and 4K displays across all standard aspect ratios (16:9, 16:10).",
          "Gaming Displays: For ASUS TUF/ROG, Acer Predator/Nitro, HP Victus/Omen, and Lenovo Legion laptops, we supply genuine 120Hz, 144Hz, 165Hz, and 240Hz high-refresh panels with zero ghosting.",
        ],
      },
      {
        heading: "2. Pinout Compatibility: 30-Pin vs 40-Pin EDP Connectors",
        content: [
          "Modern laptops utilize Embedded DisplayPort (EDP) video cables. Most standard Full HD 60Hz non-touch panels use a 30-pin EDP interface carrying two high-speed data lanes.",
          "High-refresh-rate gaming panels (144Hz+), touchscreens, and ultra-high-resolution QHD/4K displays require a 40-pin EDP interface with four data lanes. Our technicians verify your exact motherboard cable pinout, connector width, and mounting bracket geometry to guarantee 100% hardware compatibility.",
        ],
      },
      {
        heading: "3. Dim Screen vs Cracked Panel: Diagnosing Backlight Faults",
        content: [
          "If your laptop screen is dark but you can faintly see Windows icons when shining a mobile flashlight onto the glass, the LCD matrix is working, but the LED backlight circuit is failing.",
          "This symptom can be caused by a blown backlight fuse on the motherboard, a damaged EDP cable passing through the hinge, or a failed driver on the screen. We inspect the video cable and motherboard 19V backlight power fuse before replacing parts unnecessarily.",
        ],
      },
      {
        heading: "4. Same-Day Installation & Post-Repair Testing",
        content: [
          "At our Sector 20-C repair shop, screen replacement is executed using anti-static protocols, precision plastic spudgers, and OEM stretch-release adhesive pull tabs.",
          "Before client handover, we run a full screen diagnostic verifying uniform backlight distribution, zero dead pixels, full brightness adjustment range in Windows, and steady display output across the hinge's full range of motion.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does laptop screen replacement take in Chandigarh?",
        answer:
          "For standard 14-inch and 15.6-inch HD/FHD laptop screens, replacement is completed in 1 to 2 hours on the same day at our Sector 20-C shop.",
      },
      {
        question: "Will the replacement screen look as clear as the original?",
        answer:
          "Yes. We use Grade-A OEM replacement panels from leading manufacturers (such as BOE, LG Display, AU Optronics, and Innolux) matching or exceeding original factory brightness, color accuracy, and resolution.",
      },
      {
        question: "What warranty comes with a new laptop screen?",
        answer:
          "All new screen replacements at LaptopDoc come with a 3 to 6 months replacement warranty covering manufacturing defects, lines, or flickering (excludes accidental physical breaks).",
      },
      {
        question: "Can I upgrade my laptop screen from HD to Full HD (1080p)?",
        answer:
          "In many laptops with 30-pin EDP interfaces, upgrading from standard 1366x768 HD to 1920x1080 Full HD IPS is possible. Our technicians will verify your motherboard video lane support during inspection.",
      },
    ],
    process: [
      "Chassis & display assembly inspection",
      "Panel model number & EDP pinout verification",
      "Safe battery disconnection & precision bezel disassembly",
      "Original Grade-A panel installation & adhesive alignment",
      "Dead pixel check & brightness calibration testing",
    ],
    relatedServices: [
      {
        title: "Laptop Hinge & Body Repair",
        href: "/laptop-hinge-repair-chandigarh",
      },
      {
        title: "Thermal Paste Service",
        href: "/laptop-cleaning-thermal-paste-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-hinge-repair-chandigarh",
    title: "Laptop Hinge Repair & Body Replacement in Chandigarh",
    shortTitle: "Hinge & Body Repair",
    category: "Body Repair",
    icon: Wrench,
    image: "/services/hingbodyrepair.png",
    tag: "Body Reconstruction",
    metaTitle: "Laptop Hinge Repair Chandigarh",
    metaDescription:
      "Expert laptop hinge repair and body reconstruction in Chandigarh Sector 20. Broken mounts, cracked palmrests, loose screen frames fixed with structural warranty.",
    turnaround: "Same-Day / 24 Hours",
    warranty: "6 Months Structural Warranty",
    keywords: [
      "laptop hinge repair Chandigarh",
      "laptop body repair Chandigarh",
      "laptop body replacement Chandigarh",
      "laptop broken hinge repair Sector 20",
      "laptop palmrest replacement Chandigarh",
      "loose laptop screen frame repair",
      "fix broken laptop hinges Mohali Panchkula",
    ],
    heroDescription:
      "Specialized bench-level hinge reconstruction, brass mount rebuilding, and laptop body panel repair at LaptopDoc in Sector 20-C Chandigarh.",
    introduction:
      "A laptop hinge is subject to tremendous mechanical leverage every time the lid is opened or adjusted. While the hinge itself is engineered from hardened steel, manufacturers anchor it into brittle plastic screw bosses reinforced only by tiny knurled brass threaded nuts. Over months of use, factory lubricating grease inside the friction pivot dries out, increasing rotational resistance. When the force needed to turn the hinge exceeds the strength of the surrounding plastic, the mounts tear clean out of the chassis. At LaptopDoc in Sector 20-C Chandigarh, broken hinges and cracked body panels are among our specialty repairs. Instead of making you pay for expensive, hard-to-find complete body replacements, we reconstruct broken mounts with high-strength structural resins, calibrate hinge tension, and save your laptop from screen damage.",
    problems: [
      "Loud clicking, cracking, or popping sound when opening or closing the lid",
      "Screen bezel separating from the rear lid cover near bottom corners",
      "Keyboard deck or palmrest visibly lifting upward when opening screen",
      "Screen wobbling loosely and unable to stay upright at viewing angle",
      "Bottom corner casing cracked or loose screws falling out",
      "Hinge completely locked or jammed, refusing to turn",
      "Exposed internal EDP video cables or Wi-Fi antenna wires",
      "Corner plastic completely shattered after an accidental drop",
    ],
    sections: [
      {
        heading: "1. Why Laptop Hinges Break in Modern Laptops",
        content: [
          "Modern slim laptops prioritize minimal weight and ultra-thin bezels. To achieve this, plastic thickness around the hinge anchor points has been reduced to less than 1.5mm in many consumer models.",
          "When users open the laptop from the top-left or top-right corner rather than the center, uneven rotational torque acts as a lever arm, focusing shearing force on the opposite corner. Combined with dry hinge grease, the brass anchors inevitably tear loose from the base.",
        ],
      },
      {
        heading: "2. The Critical Danger of Delaying Hinge Repair",
        content: [
          "Never ignore a loose or clicking hinge. A loose steel hinge bracket flexes freely inside the display casing, pressing sharp metal corners directly against the fragile glass back of the LCD/OLED panel.",
          "Even worse, the delicate electronic display cable (EDP cable) and Wi-Fi antenna wires pass right through the hinge channel. A detached hinge can sever these wires or cause a 19V short circuit directly to the processor's video output.",
        ],
      },
      {
        heading: "3. Professional Structural Reconstruction vs Plastic Replacement",
        content: [
          "Authorized brand service centers rarely repair hinges; they simply quote high prices for replacing the entire palmrest (top casing) and rear lid assembly, which can take weeks to import and cost thousands of rupees.",
          "At LaptopDoc, we perform bench-level structural reconstruction: We clean the broken plastic fragments, embed reinforced stainless-steel support plates, reconstruct the brass screw bosses using industrial-grade high-tensile structural epoxy, and re-tap the mounting threads.",
          "Most importantly, our technicians calibrate the hinge adjustment nuts, slightly relaxing the factory friction tension so the lid opens smoothly with one hand, eliminating future torque stress.",
        ],
      },
      {
        heading: "4. Complete Body Replacement When Required",
        content: [
          "In cases of severe drop damage where the outer magnesium or polycarbonate casing is cracked beyond structural repair, we source and install original OEM replacement panels, including the bottom base, palmrest keyboard deck, and display back cover (A, B, C, D panels).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does laptop hinge repair cost compared to new body panels?",
        answer:
          "Hinge reconstruction at LaptopDoc typically costs between ₹700 and ₹1,500—saving customers 60% to 75% compared to purchasing new OEM palmrest and lid panels.",
      },
      {
        question: "Will the hinge repair be strong enough for daily use?",
        answer:
          "Yes. Our structural reinforcement technique with steel backing plates and industrial epoxy is often significantly stronger than the original thin factory plastic. We back our hinge repairs with a 6-month structural warranty.",
      },
      {
        question: "How long does hinge repair take?",
        answer:
          "Most hinge reconstructions are completed within the same day or within 24 hours to allow full structural curing of the bonding compounds.",
      },
      {
        question: "Why should I avoid using instant superglue (Fevikwik) on hinges?",
        answer:
          "Never use cyanoacrylate superglue on laptop hinges. It makes plastic extremely brittle, cannot withstand rotational torque, and often seeps into the steel pivot mechanism or internal display wiring, turning an easy repair into permanent damage.",
      },
    ],
    process: [
      "Complete device disassembly & internal wiring inspection",
      "Removal & mechanical friction calibration of steel hinges",
      "Surface preparation & structural anchor reconstruction",
      "High-tensile curing & precision torque testing",
      "Reassembly & full display alignment check",
    ],
    relatedServices: [
      {
        title: "Laptop Screen Replacement",
        href: "/laptop-screen-replacement-chandigarh",
      },
      {
        title: "Regular Laptop Service",
        href: "/laptop-service-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-battery-replacement-chandigarh",
    title: "Laptop Battery Replacement & Charger Repair in Chandigarh",
    shortTitle: "Battery & Charger Repair",
    category: "Power Issues",
    icon: Battery,
    image: "/services/batteryrepair.png",
    tag: "Power Solutions",
    metaTitle: "Laptop Battery Replacement Chandigarh",
    metaDescription:
      "Original laptop battery replacement in Chandigarh Sector 20. Fix battery drain, swelling, and charging port issues for Dell, HP, Lenovo, ASUS, Acer & Apple.",
    turnaround: "Same-Day Service",
    warranty: "6 – 12 Months Battery Warranty",
    keywords: [
      "laptop battery replacement Chandigarh",
      "laptop battery repair Chandigarh",
      "laptop charger repair Chandigarh",
      "swollen laptop battery replacement Sector 20",
      "laptop charging port repair Chandigarh",
      "Dell HP Lenovo laptop battery price",
      "MacBook battery replacement Chandigarh",
    ],
    heroDescription:
      "Reliable laptop battery replacement, charging port repair, and adapter diagnostics with 6 to 12 months warranty at LaptopDoc in Sector 20-C Chandigarh.",
    introduction:
      "A laptop's portability and usability depend entirely on a healthy, reliable battery and stable charging circuitry. Modern Lithium-Ion and Lithium-Polymer battery packs are chemical devices engineered to endure between 300 and 500 charge cycles before their full-charge capacity drops below 80%. When combined with intense heat and constant charging cycles, batteries exhibit sudden capacity drops, refuse to charge past a certain percentage, or undergo dangerous physical swelling. At LaptopDoc in Sector 20-C Chandigarh, we provide genuine and certified OEM Grade-A replacement batteries for all major laptop brands, along with charging port (DC jack) repairs and power adapter diagnostics.",
    problems: [
      "Laptop battery drains from 100% to 10% within 20 to 30 minutes",
      "Windows displays 'Plugged in, not charging' or battery icon shows an 'X'",
      "Laptop shuts down instantly when the power adapter is disconnected",
      "Trackpad is stiff, bulging, or popping up due to a swollen battery",
      "Charging cable must be held at a specific angle to charge (loose DC jack)",
      "Battery health report shows capacity degraded below 50%",
      "Laptop power adapter feels burning hot or makes a buzzing noise",
      "Battery percentage jumps erratically from 60% straight to 5%",
    ],
    sections: [
      {
        heading: "1. Genuine vs Cheap Counterfeit Batteries: The Safety Hazard",
        content: [
          "The market is flooded with cheap, uncertified duplicate batteries that lack essential battery management system (BMS) safety controllers. These low-grade packs use recycled 18650 cells or thin pouch cells with no thermal cutoff protection, risking motherboard damage or fire.",
          "At LaptopDoc, we supply only certified Grade-A and original manufacturer battery packs equipped with overcharge protection, short-circuit cutoffs, temperature sensors, and authentic BMS communication chips that sync flawlessly with Windows power reporting.",
        ],
      },
      {
        heading: "2. The Danger of a Swollen Laptop Battery",
        content: [
          "As lithium batteries degrade or suffer from internal shorting, electrolyte decomposition produces volatile gas that balloons the sealed pouch cells.",
          "A swollen battery exerts immense upward pressure on your laptop's trackpad and keyboard deck, often cracking the palmrest or bending internal circuit boards. In extreme cases, punctured pouch cells can cause dangerous thermal runaway fires. If your trackpad feels hard to click or your casing is separating, visit our Sector 20-C shop immediately for safe removal.",
        ],
      },
      {
        heading: "3. Loose DC Jack & Charging Pin Repair",
        content: [
          "Frequently, the problem is not the battery itself, but the physical charging port (DC jack) or adapter pin. Tripping over a charger wire or repeated tugging damages the center pin or fractures the motherboard solder joints.",
          "We repair loose charging ports, replace fractured DC-in cable harnesses, and repair frayed charger cables, restoring reliable power delivery without unnecessary battery replacements.",
        ],
      },
      {
        heading: "4. Maximizing the Lifespan of Your New Battery",
        content: [
          "Every battery replacement at LaptopDoc is accompanied by practical care advice: Enable 80% charge threshold limits in software (such as Dell Command, Lenovo Vantage, or ASUS Battery Care) if you work plugged in, avoid draining the battery to 0%, and ensure cooling vents remain clear.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does laptop battery replacement take?",
        answer:
          "Internal and external laptop battery replacements are typically completed on the same day within 30 to 60 minutes at our Sector 20-C workshop.",
      },
      {
        question: "What warranty do you provide on new laptop batteries?",
        answer:
          "All replacement batteries provided by LaptopDoc include a 6 to 12 months replacement warranty covering charging failure, dead cells, or abnormal capacity drops.",
      },
      {
        question: "Can I use my laptop if the battery is swollen?",
        answer:
          "No. You should immediately shut down the laptop, unplug the charger, and bring it to a professional technician. A swollen battery is a fire hazard and can permanently destroy your trackpad and keyboard.",
      },
      {
        question: "Why does my laptop say 'Plugged in, not charging'?",
        answer:
          "This message can be caused by a depleted battery BMS, a worn-out power adapter with declining wattage, a damaged charging port center pin, or a failing charging IC on the motherboard. Our technicians perform a quick electrical diagnosis to pinpoint the exact cause.",
      },
    ],
    process: [
      "Adapter wattage & battery health report analysis",
      "Safe chassis opening & internal battery inspection",
      "Original/OEM Grade-A battery pack installation",
      "BIOS battery calibration & charge-rate testing",
      "6–12 months replacement warranty card issuance",
    ],
    relatedServices: [
      {
        title: "Laptop Motherboard Repair",
        href: "/laptop-motherboard-repair-chandigarh",
      },
      {
        title: "Thermal Paste Service",
        href: "/laptop-cleaning-thermal-paste-chandigarh",
      },
    ],
  },

  {
    slug: "data-recovery-chandigarh",
    title: "Laptop & Hard Drive Data Recovery in Chandigarh",
    shortTitle: "Data Recovery",
    category: "File Recovery",
    icon: Database,
    image: "/services/datarecovery.png",
    tag: "Data Retrieval",
    metaTitle: "Data Recovery Chandigarh",
    metaDescription:
      "Confidential laptop data recovery in Chandigarh Sector 20. Recover files from crashed Windows, formatted SSDs, corrupted HDDs, and dead motherboards.",
    turnaround: "24 – 72 Hours Clean Recovery",
    warranty: "Strict Confidentiality Guarantee",
    keywords: [
      "data recovery Chandigarh",
      "laptop data recovery Chandigarh",
      "hard drive data recovery Sector 20",
      "SSD data recovery Chandigarh",
      "recover files from dead laptop",
      "corrupted hard disk recovery Tricity",
      "deleted data recovery Chandigarh",
    ],
    heroDescription:
      "Confidential data recovery from dead laptops, corrupted SSDs, clicking hard drives, formatted partitions, and crashed Windows systems in Sector 20-C Chandigarh.",
    introduction:
      "Losing vital business files, academic research, accounting databases, or irreplaceable family photographs due to a sudden hardware crash is a stressful experience. Storage devices—whether traditional mechanical hard drives (HDDs) or modern Solid State Drives (NVMe/SATA SSDs)—can fail without warning due to electrical surges, file system corruption, accidental formatting, head crashes, or firmware locking. At LaptopDoc in Sector 20-C Chandigarh, we provide professional, confidential data recovery services. Using dedicated hardware disk imagers and specialized file system reconstruction algorithms, we extract and restore your critical files while maintaining strict privacy standards.",
    problems: [
      "Laptop does not turn on and important files are trapped inside",
      "Windows fails to boot, showing Blue Screen (BSOD) or 'No Boot Device Found'",
      "Hard drive makes repetitive clicking, ticking, or grinding sounds",
      "External drive or SSD asks to be formatted when plugged into USB",
      "Accidental partition deletion or accidental Windows reformatting",
      "Drive displays 'RAW File System' or 'Access Denied / I/O Device Error'",
      "Water-damaged laptop with critical business, accounting, or personal files",
      "SSD locked in read-only mode or missing from system BIOS",
    ],
    sections: [
      {
        heading: "1. Mechanical Hard Drive (HDD) vs Solid State Drive (SSD) Recovery",
        content: [
          "Mechanical Hard Drives store data on spinning magnetic platters read by microscopic magnetic heads. When heads fail or platters develop bad sectors, standard computers freeze when attempting to read data. We use hardware cloners that bypass bad sectors and adjust read timeouts to salvage maximum data.",
          "Solid State Drives (SSDs) store data in NAND flash memory controlled by complex controller chips. When SSDs fail, they often drop into safe-mode/read-only states or disappear from the BIOS entirely. SSD recovery requires specialized controller communication to reconstruct wear-leveled data blocks.",
        ],
      },
      {
        heading: "2. Dead Laptop File Extraction (Same-Day Service)",
        content: [
          "If your laptop motherboard is dead, liquid-damaged, or physically shattered, your data drive itself is usually completely healthy.",
          "At LaptopDoc, we safely extract the NVMe M.2 SSD or 2.5-inch drive, connect it to our high-speed bench transfer workstations, copy all your desktop files, documents, photos, and browser bookmarks to an external drive or cloud storage, often on the same day.",
        ],
      },
      {
        heading: "3. Logical Recovery: Formatted Drives & Corrupted Partitions",
        content: [
          "Accidentally deleting folders, emptying the Recycle Bin, or formatting a drive does not immediately destroy your data—it merely removes directory pointers while raw file signatures remain in storage sectors until overwritten.",
          "Crucial rule: If you have accidentally formatted a drive, stop using it immediately. Continued use creates temporary files and Windows cache that overwrite the deleted data. Bring it to our shop for deep signature carving.",
        ],
      },
      {
        heading: "4. 100% Client Data Confidentiality & Secure Protocols",
        content: [
          "We treat client data with the utmost confidentiality. Technicians work within isolated, non-networked recovery environments, never inspect personal contents beyond file-structure verification, and securely purge temporary transfer caches after handover.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you recover data if my laptop is completely dead and won't turn on?",
        answer:
          "Yes. In over 95% of dead laptop cases, the internal SSD or hard drive is completely undamaged. We can safely extract your storage drive and transfer all files to a USB drive or your new computer on the same day.",
      },
      {
        question: "How much does data recovery cost in Chandigarh?",
        answer:
          "Basic data extraction from dead laptops and logical recovery starts from ₹800 to ₹1,500. Severe bad-sector drives or firmware recovery are quoted after evaluation. If we cannot recover your critical files, no service fee is charged.",
      },
      {
        question: "Why should I avoid running free internet recovery software on a clicking drive?",
        answer:
          "If a mechanical drive is clicking or has bad sectors, running software forces damaged heads to repeatedly scrape across the magnetic platters, permanently scraping off the magnetic recording layer and destroying all chances of recovery.",
      },
      {
        question: "How long does a data recovery process take?",
        answer:
          "Standard file extraction takes 2 to 4 hours. Deep bad-sector disk cloning or corrupted partition reconstruction takes between 24 and 72 hours.",
      },
    ],
    process: [
      "Free initial drive health check & media evaluation",
      "Sector-by-sector hardware clone creation (zero risk to original drive)",
      "File tree reconstruction & directory extraction",
      "Client file verification & integrity confirmation",
      "Encrypted transfer to client media & secure cache purging",
    ],
    relatedServices: [
      {
        title: "Laptop SSD Upgrade",
        href: "/laptop-ssd-upgrade-chandigarh",
      },
      {
        title: "Laptop OS Installation",
        href: "/laptop-os-installation-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-os-installation-chandigarh",
    title: "Laptop OS Installation & Windows Setup in Chandigarh",
    shortTitle: "OS Installation",
    category: "Software Setup",
    icon: Laptop,
    image: "/services/os.png",
    tag: "System Setup",
    metaTitle: "Laptop OS Installation Chandigarh",
    metaDescription:
      "Genuine Windows 10 & Windows 11 installation in Chandigarh Sector 20. Clean OS setup, original driver installation, formatting & performance tuning.",
    turnaround: "1 – 2 Hours Same-Day",
    warranty: "Full Software Stability Guarantee",
    keywords: [
      "laptop OS installation Chandigarh",
      "Windows 11 installation Chandigarh",
      "Windows 10 formatting Sector 20",
      "laptop driver installation Chandigarh",
      "slow Windows cleanup Chandigarh",
      "reinstall Windows on laptop",
      "clean OS installation Chandigarh",
    ],
    heroDescription:
      "Clean Windows 10 and Windows 11 installation, genuine driver setup, system formatting, and performance optimization at LaptopDoc in Sector 20-C Chandigarh.",
    introduction:
      "An operating system is the software foundation that connects your hardware components to the applications you use daily. Over years of use, Windows accumulates registry debris, conflicting driver updates, background telemetry agents, and leftover files that degrade boot times and cause unexpected crashes or Blue Screen of Death (BSOD) errors. Attempting to install Windows without proper partition alignment or missing manufacturer-specific chipset and power management drivers leads to sluggish performance, battery drain, and non-functional touchpads. At LaptopDoc in Sector 20-C Chandigarh, we perform clean, optimized operating system installations tailored to your hardware specifications.",
    problems: [
      "Windows stuck on loading circle, boot loop, or automatic repair screen",
      "Blue Screen of Death (BSOD) errors like INACCESSIBLE_BOOT_DEVICE",
      "Severe system slowness, freezing, or high CPU usage at idle",
      "Corrupted Windows updates failing to install or rolling back",
      "Touchpad gestures, Wi-Fi, Bluetooth, or audio not working after reinstall",
      "Upgrading from older Windows 7/8/10 to genuine Windows 11",
      "Newly purchased DOS or Linux laptop requiring Windows 11 setup",
      "Malware, ransomware, or persistent adware requiring clean wipe",
    ],
    sections: [
      {
        heading: "1. Clean Installation vs Quick Reset: Why Clean Setup Wins",
        content: [
          "Using the built-in Windows 'Reset this PC' feature often carries forward existing corrupted registry entries, broken system services, and background bloatware.",
          "A true clean installation involves backing up customer data, formatting storage with modern GPT partitions for UEFI secure boot, installing an official Microsoft Windows image, and applying official hardware drivers from the manufacturer.",
        ],
      },
      {
        heading: "2. Windows 11 Requirements & Optimization",
        content: [
          "Windows 11 requires TPM 2.0, Secure Boot, and supported processors. We configure your laptop BIOS for maximum security and performance, ensuring fast startup, fluid window management, and full compatibility.",
          "We also tune background privacy settings, disable unnecessary Microsoft telemetry, remove pre-installed third-party trial software, and configure storage optimization features like TRIM for SSDs.",
        ],
      },
      {
        heading: "3. Complete Driver Ecosystem & Hardware Validation",
        content: [
          "Generic drivers downloaded automatically by Windows Update frequently lack manufacturer-tuned power states and precision gesture support. We install verified manufacturer drivers for your Intel/AMD chipset, discrete NVIDIA/AMD graphics, realtek audio, Wi-Fi 6 cards, and precision touchpad controllers.",
        ],
      },
      {
        heading: "4. Essential Productivity Software Setup",
        content: [
          "After operating system setup, we install essential tools: web browsers with ad-block protection, PDF readers, media players, compression tools (7-Zip), and assist with MS Office configuration so your laptop is 100% ready for work or study immediately.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I lose my existing files during Windows reinstallation?",
        answer:
          "Not if you choose our backup service. Before formatting, our technicians safely back up your Desktop, Documents, Downloads, Pictures, and browser bookmarks to a secure transfer drive, restoring them cleanly after the fresh OS installation.",
      },
      {
        question: "How long does OS installation take at LaptopDoc?",
        answer:
          "On SSD-equipped laptops, a clean Windows installation with full driver setup and essential software takes between 1 and 2 hours on the same day.",
      },
      {
        question: "Can you install Windows 11 on older laptops?",
        answer:
          "Yes. For suitable hardware configurations, we can optimize and configure Windows 11 to run smoothly, safely configuring TPM and Secure Boot parameters.",
      },
      {
        question: "Are genuine Microsoft drivers included?",
        answer:
          "Yes. We install original, digitally signed manufacturer drivers for your specific model (Dell, HP, Lenovo, ASUS, Acer, etc.) ensuring full functionality for touchpads, audio, Wi-Fi, and graphics switching.",
      },
    ],
    process: [
      "User data backup (Desktop, Documents, Photos, Bookmarks)",
      "BIOS/UEFI configuration (Secure Boot, TPM, AHCI/NVMe modes)",
      "Clean Microsoft Windows 10/11 installation with GPT partitioning",
      "Official manufacturer chipset, graphics & audio driver configuration",
      "Data restoration, browser setup & final performance verification",
    ],
    relatedServices: [
      {
        title: "Laptop SSD Upgrade",
        href: "/laptop-ssd-upgrade-chandigarh",
      },
      {
        title: "Virus & Malware Removal",
        href: "/virus-removal-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-service-chandigarh",
    title: "Complete Laptop Service & Maintenance in Chandigarh",
    shortTitle: "Regular Laptop Service",
    category: "Maintenance",
    icon: Settings,
    image: "/services/regularservices.png",
    tag: "Preventive Care",
    metaTitle: "Laptop Service Chandigarh",
    metaDescription:
      "Comprehensive laptop servicing in Chandigarh Sector 20. Internal dust cleaning, cooling fan maintenance, hinge tightening & diagnostic checkup.",
    turnaround: "1 – 2 Hours Same-Day",
    warranty: "30 Days Service Assurance",
    keywords: [
      "laptop service Chandigarh",
      "laptop repair service Sector 20",
      "laptop dust cleaning Chandigarh",
      "laptop maintenance service Tricity",
      "laptop fan cleaning Chandigarh",
      "preventive laptop servicing",
      "complete computer service Chandigarh",
    ],
    heroDescription:
      "Complete 20-point laptop maintenance, internal anti-static dust cleaning, fan lubrication, hinge adjustment, and hardware health inspection in Sector 20-C Chandigarh.",
    introduction:
      "Just like an automobile requires periodic servicing to prevent engine seizure, a laptop requires regular physical and electrical maintenance to prevent catastrophic hardware failure. In the dry, dusty climate of Chandigarh, Mohali, and Panchkula, cooling fans continuously vacuum airborne dust, pet dander, and fibers into narrow internal radiator channels. Over 12 to 18 months, this debris forms a felt-like carpet that chokes airflow, elevates temperatures past 95°C, dries out hinge lubricants, and degrades battery cells. At LaptopDoc in Sector 20-C Chandigarh, our comprehensive laptop service goes far beyond surface wiping—it is a detailed 20-point preventive overhaul designed to extend your laptop's operational life by years.",
    problems: [
      "Cooling fan constantly making loud whirring or grinding noise",
      "Laptop chassis, keyboard, and bottom cover feeling uncomfortably hot",
      "Sudden thermal shutdowns while working, attending online classes, or gaming",
      "Accumulated dust, crumbs, and debris stuck between keyboard keys",
      "Sluggish performance and lagging caused by thermal throttling",
      "Loose or stiff screen hinges making cracking sounds",
      "USB ports, audio jacks, or charging port loose or clogged with lint",
      "More than 1 year since the laptop was last opened and cleaned internally",
    ],
    sections: [
      {
        heading: "1. The 20-Point LaptopDoc Preventive Overhaul",
        content: [
          "Complete Disassembly: Safe disassembly of the bottom casing, disconnecting battery power using anti-static ESD tools.",
          "Cooling Subsystem Overhaul: Removing the copper heatsink, ultrasonic lint extraction from radiator exhaust fins, fan blade micro-brushing, and spindle lubrication.",
          "Port & Keyboard Decontamination: High-pressure anti-static cleaning of USB, HDMI, Type-C, and 3.5mm audio ports, plus mechanical keyboard debris extraction.",
          "Hinge & Mount Inspection: Tightening internal chassis screws, lubricating hinge pivot joints, and inspecting brass mounting bosses for early stress cracks.",
          "Battery & Storage Health Verification: Testing SSD SMART health, battery cycle counts, and charging stability.",
        ],
      },
      {
        heading: "2. Why Ambient Chandigarh Dust Demands Annual Servicing",
        content: [
          "North India's seasonal climate transitions from dusty summer winds to winter smog. Fine particulate matter infiltrates laptop cooling blowers, adhering to fan blades and throwing them off balance.",
          "An unbalanced fan spins with eccentric wobble, wearing out its sleeve bearing within months and resulting in loud rattling noise or total fan motor failure. Annual servicing restores silent, balanced fan operation.",
        ],
      },
      {
        heading: "3. Real-World Results: Lower Temperatures & Faster Speeds",
        content: [
          "A comprehensive service typically reduces processor and graphics operating temperatures by 15°C to 25°C under load.",
          "Because modern Intel and AMD processors continuously monitor thermal headroom to boost clock speeds, lower temperatures immediately eliminate thermal throttling, giving you faster application launching and smoother multitasking.",
        ],
      },
      {
        heading: "4. Preventive Maintenance Saves Expensive Repairs",
        content: [
          "A regular ₹500 to ₹800 preventive service prevents ₹4,000+ motherboard repairs, ₹1,500 hinge breaks, and ₹3,500 screen replacements. It is the single highest-return investment you can make in your computer.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I get my laptop serviced in Chandigarh?",
        answer:
          "We recommend a comprehensive service every 12 months for general office, home, and student laptops. High-performance gaming and video rendering laptops should be serviced every 8 to 12 months due to high sustained thermal output.",
      },
      {
        question: "How long does a regular laptop service take?",
        answer:
          "A complete 20-point laptop service takes approximately 1 to 2 hours at our Sector 20-C Chandigarh workshop, allowing you to pick up your laptop on the same day.",
      },
      {
        question: "Does regular servicing include thermal paste replacement?",
        answer:
          "Yes. Our complete service package includes cleaning old dried compound from the CPU/GPU dies and applying high-conductivity non-conductive thermal paste.",
      },
      {
        question: "Will my data be affected during cleaning?",
        answer:
          "No. Physical maintenance does not modify or access your files or operating system. Your storage drive remains completely untouched.",
      },
    ],
    process: [
      "Initial temperature & fan noise baseline check",
      "Anti-static chassis opening & battery disconnection",
      "Deep ultrasonic heatsink cleaning & fan bearing lubrication",
      "Hinge torque calibration & port lint evacuation",
      "Reassembly & post-service thermal benchmark testing",
    ],
    relatedServices: [
      {
        title: "Thermal Paste Change",
        href: "/laptop-cleaning-thermal-paste-chandigarh",
      },
      {
        title: "Laptop Hinge Repair",
        href: "/laptop-hinge-repair-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-cleaning-thermal-paste-chandigarh",
    title: "Thermal Paste Replacement & Cooling Service in Chandigarh",
    shortTitle: "Thermal Paste Service",
    category: "Cooling Service",
    icon: Fan,
    image: "/services/thermalpaste.png",
    tag: "Cooling Maintenance",
    metaTitle: "Laptop Thermal Paste Change Chandigarh",
    metaDescription:
      "Professional laptop thermal paste replacement in Chandigarh Sector 20. Fix overheating, high fan noise, and CPU throttling with premium thermal compound.",
    turnaround: "1 – 2 Hours Same-Day",
    warranty: "Temperature Drop Guarantee",
    keywords: [
      "laptop thermal paste change Chandigarh",
      "laptop overheating repair Chandigarh",
      "gaming laptop cooling service Sector 20",
      "thermal paste replacement Chandigarh",
      "CPU thermal throttling fix",
      "laptop heating problem repair Chandigarh",
      "MacBook thermal paste change",
    ],
    heroDescription:
      "High-conductivity thermal paste replacement, heatsink cleaning, and thermal throttling repair for gaming and professional laptops at LaptopDoc in Sector 20-C Chandigarh.",
    introduction:
      "Modern multi-core processors (Intel Core i5/i7/i9, AMD Ryzen 5/7/9) and dedicated NVIDIA GeForce RTX graphics chips generate immense thermal density, concentrating over 100 watts of heat into silicon dies smaller than a postage stamp. To transfer this heat into the copper heat pipes, high-performance thermal interface material (thermal paste) fills the microscopic air voids between the bare silicon and copper cold plate. Over 1 to 2 years of intense thermal cycles, factory thermal paste dries up, cracks, and suffers from the 'pump-out effect', leaving air pockets that insulate heat. At LaptopDoc in Sector 20-C Chandigarh, we specialize in high-end thermal servicing, using premium non-conductive thermal compounds to drop operating temperatures, restore maximum clock speeds, and silence screaming cooling fans.",
    problems: [
      "Laptop fan screaming at 100% RPM even during basic web browsing or idle",
      "Processor temperatures hitting 90°C to 100°C under moderate loads",
      "Gaming frame rates dropping drastically after 10-15 minutes of play (thermal throttling)",
      "Laptop shutting down abruptly during video rendering or gaming sessions",
      "Exhaust vents blowing barely warm air while the keyboard deck feels burning hot",
      "Thermal paste has never been changed since the laptop was purchased 2+ years ago",
      "Fan making grinding or buzzing noise due to dry bearings and dust clumps",
    ],
    sections: [
      {
        heading: "1. The Physics of Thermal Interface Materials (TIM)",
        content: [
          "Microscopic air gaps between the heatsink and silicon die act as thermal insulators with a conductivity of only 0.026 W/mK.",
          "High-grade thermal compounds provide thermal conductivity between 8 and 14 W/mK—allowing rapid thermal conduction away from the chip.",
          "When factory paste dries into a chalky crust, thermal resistance spikes, forcing the processor to throttle its clock speed down from 4.0GHz+ to base frequencies below 1.5GHz.",
        ],
      },
      {
        heading: "2. Why Cheap Thermal Paste Causes Repeat Overheating",
        content: [
          "Many generic repair shops use cheap, bulk white silicone paste intended for low-wattage electronics. On direct-die laptop silicon that hits 85°C+, cheap paste dries out within 3 to 4 weeks.",
          "At LaptopDoc, we use only high-end, high-viscosity, non-conductive compounds (such as Arctic MX-4, Noctua NT-H1, or Thermal Grizzly) engineered specifically to resist the pump-out effect on direct-die mobile processors.",
        ],
      },
      {
        heading: "3. Thermal Pads & VRM Putty Maintenance",
        content: [
          "Cooling a laptop involves more than just the CPU and GPU cores. The surrounding Voltage Regulator Modules (VRMs) and VRAM video memory chips generate substantial heat and rely on specific-thickness thermal pads or viscous thermal putty.",
          "Substituting thin thermal paste where a 1.0mm pad is required leaves an air gap that burns out the GPU power stages. We inspect, clean, and replace dried VRM pads with original-spec thermal materials.",
        ],
      },
      {
        heading: "4. Bench Temperature Verification Before & After",
        content: [
          "We benchmark your laptop's thermal performance before and after service using HWMonitor and stress tools. Our customers routinely see CPU and GPU temperature drops of 15°C to 28°C under load, alongside substantially quieter fan acoustics.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my laptop needs fresh thermal paste?",
        answer:
          "If your laptop fan runs loud continuously, the keyboard deck feels hot, your computer lags after 15 minutes of use, or CPU temperatures exceed 85°C during normal tasks, your thermal paste has dried up and needs replacement.",
      },
      {
        question: "How long does thermal paste replacement take?",
        answer:
          "A thermal paste replacement and cooling service takes approximately 1 to 2 hours at our Sector 20-C Chandigarh shop.",
      },
      {
        question: "Will repasting stop my gaming laptop from lagging?",
        answer:
          "Yes! Lag during gaming is almost universally caused by thermal throttling (the CPU/GPU cutting clock speeds to prevent overheating). Fresh thermal compound restores proper heat transfer, keeping clock speeds high and frame rates smooth.",
      },
      {
        question: "What brand of thermal paste do you use?",
        answer:
          "We use premium, high-conductivity, non-conductive thermal compounds such as Arctic MX-4/MX-6 and Noctua NT-H1, ensuring long-lasting thermal stability for 18 to 24 months.",
      },
    ],
    process: [
      "Thermal baseline measurement & fan acoustic evaluation",
      "Safe heatsink removal & thorough 99% alcohol die cleaning",
      "Radiator fin stack lint removal & fan bearing lubrication",
      "Precision direct-die thermal compound application & pad check",
      "Full load stress test & thermal drop verification",
    ],
    relatedServices: [
      {
        title: "Regular Laptop Service",
        href: "/laptop-service-chandigarh",
      },
      {
        title: "Laptop Motherboard Repair",
        href: "/laptop-motherboard-repair-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-ram-upgrade-chandigarh",
    title: "Laptop RAM Upgrade & Memory Expansion in Chandigarh",
    shortTitle: "RAM Upgrade",
    category: "Memory Upgrade",
    icon: MemoryStick,
    image: "/services/ram.png",
    tag: "Speed Boost",
    metaTitle: "Laptop RAM Upgrade Chandigarh",
    metaDescription:
      "Fast laptop RAM upgrade in Chandigarh Sector 20. Upgrade to 8GB, 16GB, or 32GB DDR4 & DDR5 RAM with genuine brand warranty and same-day installation.",
    turnaround: "20 – 30 Minutes Same-Day",
    warranty: "3 – 5 Years Brand Warranty",
    keywords: [
      "laptop RAM upgrade Chandigarh",
      "laptop memory upgrade Chandigarh",
      "DDR4 RAM price Chandigarh Sector 20",
      "DDR5 laptop RAM upgrade",
      "upgrade 8GB to 16GB laptop RAM",
      "slow laptop memory expansion Chandigarh",
      "Crucial Kingston RAM upgrade",
    ],
    heroDescription:
      "Instant laptop RAM upgrades in Sector 20-C Chandigarh. Upgrade from 4GB/8GB to 16GB/32GB DDR4 and DDR5 dual-channel memory for smooth multitasking.",
    introduction:
      "Random Access Memory (RAM) serves as your laptop's high-speed working desk, holding the operating system, running applications, and open browser tabs for instant processor access. In modern computing, modern browsers like Google Chrome easily consume 3GB to 4GB of RAM across just 10 tabs, while Windows 11 requires at least 4GB just to run core services smoothly. If your laptop has only 4GB or 8GB of RAM, running Zoom alongside MS Excel or Photoshop exhausts physical memory, forcing Windows into slow 'disk paging' that freezes your system. At LaptopDoc in Sector 20-C Chandigarh, upgrading your laptop RAM is one of the most cost-effective performance enhancements available—taking just 20 to 30 minutes with original branded memory.",
    problems: [
      "Laptop freezes or stutters when opening multiple browser tabs",
      "Windows shows 'High Memory Usage' (85% - 100%) in Task Manager",
      "Switching between applications takes several seconds with a spinning cursor",
      "Video editing, coding IDEs (VS Code, Android Studio), or games crashing",
      "Laptop running on single-channel 4GB or 8GB RAM unable to handle Windows 11",
      "Blue screen errors related to memory management (MEMORY_MANAGEMENT BSOD)",
    ],
    sections: [
      {
        heading: "1. The Power of Dual-Channel Memory Architecture",
        content: [
          "Many laptops come from the factory with a single stick of RAM (single-channel 64-bit bus).",
          "Adding a matching second RAM stick activates dual-channel mode (128-bit bus width), effectively doubling memory bandwidth.",
          "Dual-channel memory provides an immediate 15% to 25% boost in integrated graphics (Intel Iris Xe / AMD Radeon Vega) performance, delivering smoother video playback and gaming.",
        ],
      },
      {
        heading: "2. DDR4 vs DDR5 RAM: Frequency & Timing Compatibility",
        content: [
          "RAM generations are physically and electrically distinct: DDR3 (1600MHz), DDR4 (2400MHz, 2666MHz, 3200MHz), and modern DDR5 (4800MHz, 5600MHz).",
          "Installing mismatched frequencies or incorrect voltage memory can prevent your laptop from booting. Our technicians check your processor memory controller specs to install perfectly matched modules.",
        ],
      },
      {
        heading: "3. Genuine Branded Memory with Manufacturer Warranty",
        content: [
          "We stock exclusively genuine, Grade-A memory modules from Tier-1 manufacturers including Crucial (Micron), Kingston, Samsung, and SK Hynix, backed by 3 to 5 years manufacturer warranty.",
        ],
      },
      {
        heading: "4. Same-Day Installation & Memory Diagnostics",
        content: [
          "Installation takes less than 30 minutes. Before handover, we run Windows Memory Diagnostic (MemTest) to verify zero parity errors and confirm proper dual-channel activation in the BIOS.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if my laptop RAM can be upgraded?",
        answer:
          "Most Windows laptops (Dell, HP, Lenovo, ASUS, Acer, MSI) have one or two SODIMM expansion slots. Some ultra-slim laptops have soldered memory. Bring your laptop to our Sector 20-C shop for a free compatibility check.",
      },
      {
        question: "How much RAM do I need for smooth performance in 2026?",
        answer:
          "For general office work, browsing, and online education, 16GB dual-channel RAM is the ideal sweet spot. For gaming, graphic design, and software development, 16GB to 32GB is recommended.",
      },
      {
        question: "How long does a RAM upgrade take?",
        answer:
          "RAM upgrades take only 20 to 30 minutes at our Sector 20-C workshop while you wait.",
      },
      {
        question: "Will upgrading RAM delete any of my files?",
        answer:
          "No. RAM is volatile temporary memory that clears when power is turned off. All your files, photos, applications, and Windows settings reside on your SSD/HDD and remain 100% untouched.",
      },
    ],
    process: [
      "Hardware memory controller & slot configuration check",
      "Anti-static battery disconnection & slot preparation",
      "Matching OEM DDR4/DDR5 RAM module installation",
      "BIOS memory frequency & dual-channel verification",
      "MemTest diagnostic pass & 3–5 yr warranty issuance",
    ],
    relatedServices: [
      {
        title: "Laptop SSD Upgrade",
        href: "/laptop-ssd-upgrade-chandigarh",
      },
      {
        title: "Regular Laptop Service",
        href: "/laptop-service-chandigarh",
      },
    ],
  },

  {
    slug: "laptop-ssd-upgrade-chandigarh",
    title: "Laptop SSD Upgrade & Storage Expansion in Chandigarh",
    shortTitle: "SSD Upgrade",
    category: "Storage Upgrade",
    icon: HardDrive,
    image: "/services/ssd.png",
    tag: "Speed Upgrade",
    metaTitle: "Laptop SSD Upgrade Chandigarh",
    metaDescription:
      "Transform slow laptop speed with SSD upgrade in Chandigarh Sector 20. NVMe M.2 & SATA SSDs with free data cloning and 3–5 years warranty.",
    turnaround: "30 – 45 Minutes Same-Day",
    warranty: "3 – 5 Years Brand Warranty",
    keywords: [
      "laptop SSD upgrade Chandigarh",
      "NVMe SSD upgrade Chandigarh",
      "replace laptop HDD with SSD Sector 20",
      "slow laptop SSD upgrade Chandigarh",
      "100 percent disk usage fix Chandigarh",
      "Kingston Crucial WD SSD Chandigarh",
      "data cloning to SSD Chandigarh",
    ],
    heroDescription:
      "Transform your laptop speed by up to 10x with an NVMe or SATA SSD upgrade at LaptopDoc in Sector 20-C Chandigarh. Free seamless data cloning included.",
    introduction:
      "If your laptop takes several minutes to boot, freezes during daily tasks, or shows 100% Disk Usage in Task Manager, an older mechanical Hard Disk Drive (HDD) is almost certainly the culprit. Mechanical hard drives rely on magnetic platters spinning at 5400 RPM with physical read heads that can only manage 75 to 100 Input/Output Operations Per Second (IOPS). Modern operating systems like Windows 10 and 11 demand thousands of IOPS for background indexing and updates. Upgrading to a Solid State Drive (SSD)—which delivers between 50,000 and 500,000 IOPS with zero moving parts—is the single most dramatic speed improvement you can give your computer. At LaptopDoc in Sector 20-C Chandigarh, we upgrade your storage in 30 to 45 minutes with seamless data cloning, so you keep all your files, applications, and settings exactly as they were.",
    problems: [
      "Laptop takes 3 to 5 minutes to start up and reach a usable desktop",
      "Task Manager continuously displays '100% Disk Usage' even when idle",
      "Applications like Chrome, MS Word, or Excel take 30+ seconds to open",
      "Laptop freezes completely whenever Windows updates download in the background",
      "Hard drive making clicking or spinning noises accompanied by severe lag",
      "Storage drive full, needing expansion to 512GB, 1TB, or 2TB high-speed storage",
    ],
    sections: [
      {
        heading: "1. HDD vs SATA SSD vs NVMe M.2 SSD Performance",
        content: [
          "Mechanical HDD: ~100 MB/s sequential speed, ~80 IOPS. Severe bottleneck for modern software.",
          "2.5-inch SATA SSD: ~550 MB/s speed (5x faster than HDD). Perfect drop-in replacement for older laptops.",
          "NVMe PCIe Gen3/Gen4 M.2 SSD: Up to 3,500 MB/s to 7,000 MB/s speed (35x to 70x faster than HDD). Instant application loading and sub-10-second Windows boot times.",
        ],
      },
      {
        heading: "2. Free 1-to-1 Data Cloning: Keep Everything Intact",
        content: [
          "You do not need to reinstall your applications, reconfigure passwords, or transfer files manually. We perform bit-by-bit hardware disk cloning, migrating your exact Windows installation, licensed software, desktop files, and personal data to the new SSD seamlessly.",
        ],
      },
      {
        heading: "3. Tier-1 SSD Brands with 3 to 5 Years Warranty",
        content: [
          "We install only original, high-endurance Solid State Drives from industry leaders: Crucial (Micron), Western Digital (WD Blue/Black), Kingston, and Samsung EVO/PRO, backed by 3 to 5 years manufacturer warranty.",
        ],
      },
      {
        heading: "4. Lower Power Consumption & Drop Protection",
        content: [
          "Because SSDs have no moving mechanical platters, they consume up to 60% less battery power and generate substantially less heat. Moreover, an SSD is immune to physical shock—dropping a running laptop with an SSD will not cause head crashes or data loss.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will an SSD upgrade make my old laptop fast again?",
        answer:
          "Yes! An SSD upgrade delivers the most dramatic speed boost possible. Boot times drop from 3-4 minutes to under 15 seconds, applications launch instantly, and the 100% disk usage freeze disappears completely.",
      },
      {
        question: "Will I lose my files, software, or Windows license during an SSD upgrade?",
        answer:
          "No. We perform a complete 1-to-1 data clone. All your software, files, settings, and Windows license are preserved exactly as they were.",
      },
      {
        question: "How long does an SSD upgrade take?",
        answer:
          "An SSD upgrade with full data cloning typically takes 30 to 45 minutes at our Sector 20-C Chandigarh shop.",
      },
      {
        question: "What SSD capacity should I choose?",
        answer:
          "For standard home and office use, a 256GB or 512GB SSD is ideal. For gaming, graphic design, and large photo/video libraries, 1TB or 2TB NVMe SSDs are recommended.",
      },
    ],
    process: [
      "Drive interface verification (SATA III, NVMe Gen3/Gen4 M.2)",
      "Sector integrity check on source hard drive",
      "Bit-for-bit high-speed data & OS cloning",
      "Precision SSD installation & BIOS boot optimization",
      "Verification of 10-second boot & 3–5 yr warranty registration",
    ],
    relatedServices: [
      {
        title: "Laptop RAM Upgrade",
        href: "/laptop-ram-upgrade-chandigarh",
      },
      {
        title: "Laptop OS Installation",
        href: "/laptop-os-installation-chandigarh",
      },
    ],
  },

  {
    slug: "desktop-repair-chandigarh",
    title: "Desktop Computer & PC Repair in Chandigarh",
    shortTitle: "Desktop Repair",
    category: "PC Repair",
    icon: Computer,
    image: "/services/desktop.png",
    tag: "PC Solutions",
    metaTitle: "Desktop Computer Repair Chandigarh",
    metaDescription:
      "Expert desktop computer and custom PC repair in Chandigarh Sector 20. Motherboard, SMPS power supply, no display, RAM, GPU & cabinet cleaning services.",
    turnaround: "Same-Day / 24 Hours",
    warranty: "Service Warranty Included",
    keywords: [
      "desktop repair Chandigarh",
      "computer repair in Chandigarh",
      "PC repair Chandigarh Sector 20",
      "SMPS power supply repair Chandigarh",
      "desktop no display repair",
      "gaming PC repair Chandigarh",
      "computer motherboard repair Chandigarh",
    ],
    heroDescription:
      "Complete desktop PC repair, custom gaming rig troubleshooting, SMPS power supply replacement, and hardware upgrades in Sector 20-C Chandigarh.",
    introduction:
      "Desktop computers and custom gaming PCs are powerful, modular machines that serve as the backbone of offices, architectural studios, creative agencies, and gaming setups across Chandigarh and Tricity. However, because desktop cabinets feature high-volume airflow through multiple intake fans, they accumulate immense dust over time. Component failures—such as failing SMPS power supply units, RAM slot oxidation, thermal throttling on high-TDP CPUs, or faulty discrete graphics cards—require specialized bench diagnosis. At LaptopDoc in Sector 20-C Chandigarh, our 16+ years of hardware expertise extends fully to desktop and workstation repair, component upgrades, and custom PC optimization.",
    problems: [
      "Desktop powers on, fans spin, but monitor displays 'No Signal'",
      "PC completely dead with zero lights or fan activity when pressing power button",
      "Computer reboots continuously or displays Blue Screen (BSOD) under load",
      "SMPS power supply making buzzing, rattling noise or emitting burning odor",
      "Loud CPU or GPU cooler fan noise accompanied by severe lag",
      "Custom gaming PC crashing or black-screening during heavy 3D gaming",
      "Front panel USB ports, audio jacks, or power switches not functioning",
      "Upgrading graphics card, power supply, RAM, or storage for gaming/work",
    ],
    sections: [
      {
        heading: "1. No-Display & RAM Slot Oxidation Diagnostics",
        content: [
          "The most frequent desktop problem is a computer that powers on with fans spinning at full speed, but the monitor displays 'No Signal'.",
          "In over 70% of cases, this is caused by oxidized gold contacts on RAM modules, dusty PCIe graphics slots, or corrupted CMOS settings. We clean memory slots with electronic contact cleaner, test voltage rails, and restore display output without costly part replacements.",
        ],
      },
      {
        heading: "2. SMPS Power Supply Testing & Replacement",
        content: [
          "A failing or cheap power supply unit (SMPS) can deliver unstable voltage ripple that damages motherboards and graphics cards.",
          "We test all output rails (+12V, +5V, +3.3V) with digital power supply testers and install certified 80-Plus Bronze/Gold power supplies (Corsair, Cooler Master, DeepCool) with proper wattage overhead.",
        ],
      },
      {
        heading: "3. Gaming Rig & Workstation Thermal Overhaul",
        content: [
          "High-performance Intel Core i7/i9, AMD Ryzen, and NVIDIA RTX graphics cards generate heavy heat. We clean radiator fin stacks on AIO liquid coolers, replace degraded thermal paste, clean GPU fans, and optimize cabinet intake/exhaust static pressure airflow.",
        ],
      },
      {
        heading: "4. Custom PC Upgrades & Cable Management",
        content: [
          "Looking to boost gaming or rendering performance? We guide and execute component upgrades: installing high-speed NVMe SSDs, additional DDR4/DDR5 RAM, upgrading graphics cards, and organizing internal cable management for clean aesthetics and superior airflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I bring just the CPU cabinet for repair?",
        answer:
          "Yes. You only need to bring the CPU cabinet. You do not need to bring power cords, monitors, keyboards, or mice, as we have full testing peripherals at our Sector 20-C workbench.",
      },
      {
        question: "How long does desktop computer diagnosis take?",
        answer:
          "Most desktop power, display, and memory issues are diagnosed within 2 to 4 hours on the same day.",
      },
      {
        question: "Do you repair custom liquid-cooled gaming PCs?",
        answer:
          "Yes. We service all desktop types—from standard Dell/HP office computers to high-end custom gaming rigs, workstations, and editing PCs.",
      },
      {
        question: "What causes a desktop to suddenly shut down while gaming?",
        answer:
          "Sudden shutdowns during gaming or rendering are typically caused by CPU/GPU thermal overheating (dried thermal paste/clogged coolers) or an aging SMPS power supply unable to deliver required peak wattage to the graphics card.",
      },
    ],
    process: [
      "SMPS power supply voltage rail testing",
      "RAM & PCIe discrete graphics slot contact cleaning",
      "CPU cooler & thermal interface inspection",
      "Motherboard BIOS battery & POST code diagnostic",
      "Burn-in load testing & cable management cleanup",
    ],
    relatedServices: [
      {
        title: "Thermal Paste Change",
        href: "/laptop-cleaning-thermal-paste-chandigarh",
      },
      {
        title: "Laptop SSD Upgrade",
        href: "/laptop-ssd-upgrade-chandigarh",
      },
    ],
  },

  {
    slug: "virus-removal-chandigarh",
    title: "Virus, Malware & Spyware Removal in Chandigarh",
    shortTitle: "Virus Removal",
    category: "Security Cleanup",
    icon: Bug,
    image: "/services/virusremoval.png",
    tag: "System Security",
    metaTitle: "Virus & Malware Removal Chandigarh",
    metaDescription:
      "Professional laptop virus, malware, and adware removal in Chandigarh Sector 20. Clean browser pop-ups, hidden crypto miners, and slow performance safely.",
    turnaround: "1 – 2 Hours Same-Day",
    warranty: "Full Clean System Guarantee",
    keywords: [
      "virus removal Chandigarh",
      "laptop malware removal Chandigarh",
      "spyware cleanup Sector 20",
      "remove browser redirect popups Chandigarh",
      "slow laptop virus fix Chandigarh",
      "crypto miner malware removal",
      "ransomware protection Chandigarh",
    ],
    heroDescription:
      "Deep virus, trojan, malware, adware, and hidden cryptocurrency miner removal without data loss at LaptopDoc in Sector 20-C Chandigarh.",
    introduction:
      "Malicious software has evolved far beyond obvious prank pop-ups. Modern malware—including silent trojans, browser redirect hijackers, rogue adware, and hidden cryptocurrency miners—is engineered to operate invisibly in the background. A hidden crypto miner or botnet client can pin your processor at 50% to 100% utilization, causing extreme laptop heating, loud fan noise, and sluggish performance while silently transmitting your keystrokes, personal passwords, and financial credentials to remote command servers. At LaptopDoc in Sector 20-C Chandigarh, our security technicians utilize specialized offline rootkit scanners and registry analysis tools to completely eliminate infections while preserving your critical files and operating system.",
    problems: [
      "Web browser repeatedly redirecting to unwanted search engines or spam pages",
      "Aggressive pop-up advertisements appearing on desktop even with browsers closed",
      "Laptop running extremely hot and sluggish with high CPU usage at idle",
      "Windows Defender or security settings disabled and unable to turn back on",
      "Files converted to unknown extensions with ransom note text files",
      "Strange background programs launching automatically on startup",
      "Suspicious unauthorized emails or social media activity originating from your PC",
      "Bank or email accounts warning of compromised sessions from your device",
    ],
    sections: [
      {
        heading: "1. The Modern Threat: Silent Crypto Miners & Infostealers",
        content: [
          "The most common malware we remediate in Chandigarh is hidden browser-based or background cryptocurrency miners installed through pirated software or cracked games.",
          "These miners continuously consume CPU and GPU power, drastically reducing laptop lifespan and running fans at maximum speed. We terminate rootkit processes, remove malicious scheduled tasks, and clear startup registry injection keys.",
        ],
      },
      {
        heading: "2. Browser Hijackers & Malicious Extension Cleansing",
        content: [
          "Adware often injects rogue extension helper objects and modifies browser shortcut targets to force traffic through search monetization redirects.",
          "We completely sanitize Chrome, Edge, and Firefox browser profiles, remove malicious proxy settings, and reset network DNS routing to safe defaults.",
        ],
      },
      {
        heading: "3. Safe Removal Without Formatting or Data Loss",
        content: [
          "Unlike standard advice that tells users to wipe their hard drive completely, our deep cleaning methods target and neutralize malicious files while preserving your personal documents, photos, applications, and operating system intact.",
        ],
      },
      {
        heading: "4. Future Hardening & Antivirus Configuration",
        content: [
          "After sanitization, we restore Windows Security integrity, enable real-time ransomware protection, update definitions, and configure browser ad-blocking tools to prevent re-infection.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can viruses be removed without losing my personal files?",
        answer:
          "Yes. In over 90% of malware, adware, and trojan infections, our technicians can completely purge the malicious files and registry hooks while keeping all your documents, photos, and software completely intact.",
      },
      {
        question: "How long does a malware removal service take?",
        answer:
          "A thorough deep-scan and system sanitization takes approximately 1 to 2 hours at our Sector 20-C Chandigarh workshop.",
      },
      {
        question: "Why is my laptop fan running loud even when I am not doing anything?",
        answer:
          "A laptop fan running loud at idle is a classic sign of a hidden cryptocurrency miner or malicious background process consuming CPU/GPU cycles. We can inspect Task Manager and remove the unauthorized process.",
      },
      {
        question: "Do I need to buy expensive third-party antivirus software?",
        answer:
          "For most users, properly configured and updated Microsoft Windows Defender combined with safe browsing habits and a reputable ad-blocker provides world-class security without paying annual subscription fees.",
      },
    ],
    process: [
      "Offline WinPE environment booting & rootkit scanning",
      "Termination of malicious background processes & scheduled tasks",
      "Browser extension sanitization & DNS proxy restoration",
      "Registry startup key cleanup & Windows Defender repair",
      "Real-time protection hardening & performance validation",
    ],
    relatedServices: [
      {
        title: "Laptop OS Installation",
        href: "/laptop-os-installation-chandigarh",
      },
      {
        title: "Regular Laptop Service",
        href: "/laptop-service-chandigarh",
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
