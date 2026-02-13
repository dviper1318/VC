export interface Company {
  name: string;
  logo?: string;
  url?: string;
}

export interface Category {
  name: string;
  color: string;
  companies: Company[];
}

export interface MarketMap {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categories: Category[];
}

export const marketMaps: MarketMap[] = [
  {
    id: "bci",
    title: "Brain-Computer Interfaces",
    subtitle: "The BCI Ecosystem",
    description:
      "Mapping the companies building the future of neural interfaces — from invasive implants to non-invasive wearables, and the software platforms powering them.",
    categories: [
      {
        name: "Invasive / Implantable",
        color: "#1fa5fd",
        companies: [
          { name: "Neuralink", url: "https://neuralink.com" },
          { name: "Paradromics", url: "https://paradromics.com" },
          { name: "Precision Neuroscience", url: "https://precisionneuro.io" },
          { name: "Synchron", url: "https://synchron.com" },
          { name: "BrainGate" },
          { name: "Motif Neurotech" },
        ],
      },
      {
        name: "Non-Invasive / Wearable",
        color: "#4f7df9",
        companies: [
          { name: "Kernel", url: "https://kernel.com" },
          { name: "NextSense" },
          { name: "Emotiv", url: "https://emotiv.com" },
          { name: "Muse (Interaxon)" },
          { name: "OpenBCI" },
          { name: "Neurable", url: "https://neurable.com" },
          { name: "Cognixion" },
        ],
      },
      {
        name: "Neural Signal Processing",
        color: "#7b5cf5",
        companies: [
          { name: "BlackRock Neurotech" },
          { name: "CorTec" },
          { name: "Intan Technologies" },
          { name: "g.tec medical" },
          { name: "BrainAccess" },
        ],
      },
      {
        name: "BCI Software & AI",
        color: "#a83bef",
        companies: [
          { name: "CTRL-Labs (Meta)" },
          { name: "BrainCo" },
          { name: "Arctop" },
          { name: "Neurotechnology" },
          { name: "MindMaze" },
        ],
      },
      {
        name: "Therapeutic / Medical",
        color: "#d41ae8",
        companies: [
          { name: "NeuroPace" },
          { name: "Medtronic DBS" },
          { name: "Abbott Neuromod" },
          { name: "Boston Scientific" },
          { name: "Rune Labs" },
        ],
      },
    ],
  },
  {
    id: "smartglasses",
    title: "Smart Glasses & AR",
    subtitle: "The Spatial Computing Ecosystem",
    description:
      "From heads-up displays to full mixed reality, mapping the companies defining the next computing platform.",
    categories: [
      {
        name: "Consumer Smart Glasses",
        color: "#1fa5fd",
        companies: [
          { name: "Meta (Ray-Ban)" },
          { name: "Snap Spectacles" },
          { name: "Xreal", url: "https://xreal.com" },
          { name: "RayNeo" },
          { name: "Brilliant Labs" },
          { name: "Even Realities" },
        ],
      },
      {
        name: "Enterprise AR / MR",
        color: "#4f7df9",
        companies: [
          { name: "Apple Vision Pro" },
          { name: "Microsoft HoloLens" },
          { name: "Magic Leap" },
          { name: "Vuzix" },
          { name: "ThirdEye Gen" },
          { name: "Lenovo ThinkReality" },
        ],
      },
      {
        name: "Optics & Display Tech",
        color: "#7b5cf5",
        companies: [
          { name: "Lumus" },
          { name: "DigiLens" },
          { name: "WaveOptics (Snap)" },
          { name: "Dispelix" },
          { name: "Avegant" },
          { name: "Letinar" },
        ],
      },
      {
        name: "Spatial Software & OS",
        color: "#a83bef",
        companies: [
          { name: "Niantic" },
          { name: "ShapesXR" },
          { name: "Spatial" },
          { name: "Unity" },
          { name: "JigSpace" },
          { name: "Campfire 3D" },
        ],
      },
      {
        name: "Sensors & Tracking",
        color: "#d41ae8",
        companies: [
          { name: "Tobii (Eye Tracking)" },
          { name: "Ultraleap" },
          { name: "SMI (Apple)" },
          { name: "Qualcomm XR" },
          { name: "STMicroelectronics" },
        ],
      },
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    subtitle: "The GenAI Ecosystem",
    description:
      "The models, infrastructure, applications, and tooling powering the generative AI revolution.",
    categories: [
      {
        name: "Foundation Models",
        color: "#1fa5fd",
        companies: [
          { name: "OpenAI", url: "https://openai.com" },
          { name: "Anthropic", url: "https://anthropic.com" },
          { name: "Google DeepMind" },
          { name: "Meta AI (LLaMA)" },
          { name: "Mistral AI" },
          { name: "xAI" },
          { name: "Cohere" },
        ],
      },
      {
        name: "Image & Video Generation",
        color: "#4f7df9",
        companies: [
          { name: "Midjourney" },
          { name: "Stability AI" },
          { name: "Runway" },
          { name: "Pika" },
          { name: "Ideogram" },
          { name: "Luma AI" },
          { name: "Kling AI" },
        ],
      },
      {
        name: "AI Coding & Dev Tools",
        color: "#7b5cf5",
        companies: [
          { name: "Cursor" },
          { name: "GitHub Copilot" },
          { name: "Replit" },
          { name: "Cognition (Devin)" },
          { name: "Codeium" },
          { name: "Tabnine" },
          { name: "Poolside AI" },
        ],
      },
      {
        name: "AI Infrastructure",
        color: "#a83bef",
        companies: [
          { name: "NVIDIA" },
          { name: "AMD" },
          { name: "Cerebras" },
          { name: "Groq" },
          { name: "Together AI" },
          { name: "Anyscale" },
          { name: "Modal" },
          { name: "CoreWeave" },
        ],
      },
      {
        name: "AI Applications & Agents",
        color: "#d41ae8",
        companies: [
          { name: "Jasper" },
          { name: "Writer" },
          { name: "Harvey AI" },
          { name: "Glean" },
          { name: "Sierra AI" },
          { name: "Adept AI" },
          { name: "Perplexity" },
        ],
      },
    ],
  },
  {
    id: "humanoids",
    title: "Humanoid Robotics",
    subtitle: "The Humanoid Ecosystem",
    description:
      "Full-stack humanoid robots, components, and the AI brains powering them — from warehouse workers to household companions.",
    categories: [
      {
        name: "Full Stack Humanoids",
        color: "#1fa5fd",
        companies: [
          { name: "Figure AI", url: "https://figure.ai" },
          { name: "Tesla Optimus" },
          { name: "1X Technologies" },
          { name: "Apptronik" },
          { name: "Agility Robotics" },
          { name: "Unitree" },
          { name: "Sanctuary AI" },
        ],
      },
      {
        name: "Hands & Manipulation",
        color: "#4f7df9",
        companies: [
          { name: "Shadow Robot" },
          { name: "Sarcos" },
          { name: "Dexterity" },
          { name: "RightHand Robotics" },
          { name: "Soft Robotics" },
        ],
      },
      {
        name: "Locomotion & Mobility",
        color: "#7b5cf5",
        companies: [
          { name: "Boston Dynamics" },
          { name: "UBTECH" },
          { name: "Fourier Intelligence" },
          { name: "Xiaomi CyberOne" },
          { name: "SoftBank (Pepper/NAO)" },
        ],
      },
      {
        name: "Robot AI / Foundation Models",
        color: "#a83bef",
        companies: [
          { name: "Physical Intelligence" },
          { name: "Covariant" },
          { name: "Skild AI" },
          { name: "Collaborative Robotics" },
          { name: "Embodied AI (Google)" },
        ],
      },
      {
        name: "Sensors & Components",
        color: "#d41ae8",
        companies: [
          { name: "Intel RealSense" },
          { name: "Velodyne Lidar" },
          { name: "Ouster" },
          { name: "Maxon Motors" },
          { name: "Harmonic Drive" },
        ],
      },
    ],
  },
  {
    id: "robotics",
    title: "Industrial Robotics & Automation",
    subtitle: "The Robotics Ecosystem",
    description:
      "Autonomous systems transforming warehouses, factories, construction, and agriculture.",
    categories: [
      {
        name: "Warehouse & Logistics",
        color: "#1fa5fd",
        companies: [
          { name: "Amazon Robotics" },
          { name: "Locus Robotics" },
          { name: "6 River Systems" },
          { name: "Berkshire Grey" },
          { name: "Symbotic" },
          { name: "Ocado" },
        ],
      },
      {
        name: "Manufacturing & Assembly",
        color: "#4f7df9",
        companies: [
          { name: "Fanuc" },
          { name: "ABB Robotics" },
          { name: "KUKA" },
          { name: "Universal Robots" },
          { name: "Franka Emika" },
          { name: "Realtime Robotics" },
        ],
      },
      {
        name: "Autonomous Vehicles & Drones",
        color: "#7b5cf5",
        companies: [
          { name: "Waymo" },
          { name: "Cruise" },
          { name: "Aurora" },
          { name: "Nuro" },
          { name: "Skydio" },
          { name: "Zipline" },
        ],
      },
      {
        name: "Construction & Agriculture",
        color: "#a83bef",
        companies: [
          { name: "Built Robotics" },
          { name: "Canvas" },
          { name: "Dusty Robotics" },
          { name: "John Deere (Autonomy)" },
          { name: "Iron Ox" },
          { name: "FarmWise" },
        ],
      },
      {
        name: "Robot-as-a-Service",
        color: "#d41ae8",
        companies: [
          { name: "Bear Robotics" },
          { name: "Serve Robotics" },
          { name: "Cobalt Robotics" },
          { name: "Diligent Robotics" },
          { name: "Savioke" },
        ],
      },
    ],
  },
];
