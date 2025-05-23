// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

// export const interviewer: CreateAssistantDTO = {
//   name: "Interviewer",
//   firstMessage:
//     "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "sarah",
//     stability: 0.4,
//     similarityBoost: 0.8,
//     speed: 0.9,
//     style: 0.5,
//     useSpeakerBoost: true,
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

// Interview Guidelines:
// Follow the structured question flow:
// {{questions}}

// Engage naturally & react appropriately:
// Listen actively to responses and acknowledge them before moving forward.
// Ask brief follow-up questions if a response is vague or requires more detail.
// Keep the conversation flowing smoothly while maintaining control.
// Be professional, yet warm and welcoming:

// Use official yet friendly language.
// Keep responses concise and to the point (like in a real voice interview).
// Avoid robotic phrasing—sound natural and conversational.
// Answer the candidate’s questions professionally:

// If asked about the role, company, or expectations, provide a clear and relevant answer.
// If unsure, redirect the candidate to HR for more details.

// Conclude the interview properly:
// Thank the candidate for their time.
// Inform them that the company will reach out soon with feedback.
// End the conversation on a polite and positive note.


// - Be sure to be professional and polite.
// - Keep all your responses short and simple. Use official language, but be kind and welcoming.
// - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//       },
//     ],
//   },
// };

// export const feedbackSchema = z.object({
//   totalScore: z.number(),
//   categoryScores: z.tuple([
//     z.object({
//       name: z.literal("Communication Skills"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Technical Knowledge"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Problem Solving"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Cultural Fit"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Confidence and Clarity"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//   ]),
//   strengths: z.array(z.string()),
//   areasForImprovement: z.array(z.string()),
//   finalAssessment: z.string(),
// });

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];


export const generator = {
  "name": "devansh_interview_platform",
  "nodes": [
    {
      "name": "start",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -109.4621439993664,
          "y": 161.90376260829487
        }
      },
      "prompt": "Hello {{username}}! Let's prepare your interview. I'll ask you a few questions and generate a perfect interview just for you . Have a conversation with the user about their favourite AI agents. Are you ready?\n",
      "voice": {
        "model": "aura-2",
        "voiceId": "thalia",
        "provider": "deepgram"
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [
              "entry",
              "mid",
              "senior"
            ],
            "type": "string",
            "title": "level",
            "description": "The job experience level."
          },
          {
            "enum": [],
            "type": "number",
            "title": "amount",
            "description": "How many questions would you like to generate?"
          },
          {
            "enum": [],
            "type": "string",
            "title": "techstack",
            "description": "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…"
          },
          {
            "enum": [],
            "type": "string",
            "title": "role",
            "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX?"
          },
          {
            "enum": [
              "Technical",
              "HR",
              "Behavioral",
              "Managerial",
              "System Design",
              "Product Management",
              "Sales",
              "Marketing",
              "Finance",
              "Data Science",
              "Internship"
            ],
            "type": "string",
            "title": "type",
            "description": "What type of the interview should it be?"
          }
        ]
      },
      "messagePlan": {
        "firstMessage": "Hey there!"
      }
    },
    {
      "name": "apiRequest_1748029931044",
      "type": "apiRequest",
      "metadata": {
        "position": {
          "x": -108.58179454943163,
          "y": 759.4862924185123
        }
      },
      "method": "POST",
      "url": "https://echo-hire-gamma.vercel.app/api/vapi/generate",
      "headers": {
        "type": "object",
        "properties": {}
      },
      "body": {
        "type": "object",
        "properties": {
          "role": {
            "type": "string",
            "value": "{{ role }}",
            "description": ""
          },
          "type": {
            "type": "string",
            "value": "{{ type }}",
            "description": ""
          },
          "level": {
            "type": "string",
            "value": "{{ level }}",
            "description": ""
          },
          "amount": {
            "type": "string",
            "value": "{{ amount }}",
            "description": ""
          },
          "userid": {
            "type": "string",
            "value": "{{ userid }}",
            "description": ""
          },
          "techstack": {
            "type": "string",
            "value": "{{ techstack }}",
            "description": ""
          }
        }
      },
      "output": {
        "type": "object",
        "properties": {}
      },
      "mode": "blocking",
      "hooks": []
    },
    {
      "name": "conversation_1748030322941",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -111.87512314515683,
          "y": 1020.3486305531185
        }
      },
      "prompt": "Thank the user for the conversation and inform them that the interview has been generated successfully",
      "voice": {
        "model": "eleven_turbo_v2_5",
        "speed": 1,
        "style": 0,
        "voiceId": "EXAVITQu4vr4xnSDxMaL",
        "autoMode": false,
        "provider": "11labs",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "stability": 0.5,
        "cachingEnabled": true,
        "similarityBoost": 0.75,
        "useSpeakerBoost": false,
        "enableSsmlParsing": false,
        "optimizeStreamingLatency": 3
      }
    },
    {
      "name": "hangup_1748030433472",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": -17.462143999366404,
          "y": 1238.8719474631894
        }
      }
    },
    {
      "name": "conversation_1748032104333",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -111.91164469249543,
          "y": 522.6030597488626
        }
      },
      "prompt": "Say that the Interview will be generated shortly.",
      "voice": {
        "model": "eleven_turbo_v2_5",
        "speed": 1,
        "style": 0,
        "voiceId": "EXAVITQu4vr4xnSDxMaL",
        "autoMode": false,
        "provider": "11labs",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "stability": 0.5,
        "cachingEnabled": true,
        "similarityBoost": 0.75,
        "useSpeakerBoost": false,
        "enableSsmlParsing": false,
        "optimizeStreamingLatency": 3
      }
    }
  ],
  "edges": [
    {
      "from": "apiRequest_1748029931044",
      "to": "conversation_1748030322941",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1748030322941",
      "to": "hangup_1748030433472",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "start",
      "to": "conversation_1748032104333",
      "condition": {
        "type": "ai",
        "prompt": "if user provided all the required variables."
      }
    },
    {
      "from": "conversation_1748032104333",
      "to": "apiRequest_1748029931044",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    }
  ]
}