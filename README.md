# Content Creator Platform - Frontend

A Next.js-powered platform designed specifically for content creators to manage their online presence effectively and engage with their audience.

## ✨ Key Features

- **Content Management Dashboard:** Intuitive interface for managing all content
- **Analytics Dashboard:** Track engagement and audience growth
- **Customizable Profile:** Personalize your creator profile
- **Media Library:** Organize and manage your media assets
- **Audience Engagement Tools:** Features for connecting with your community
- **Responsive Design:** Optimized for all devices

## 🛠️ Technology Stack

- **Framework:** Next.js
- **State Management:** React Context/Redux
- **Styling:** Tailwind CSS/Styled Components
- **Deployment:** Microsoft Azure
- **Analytics:** Custom analytics integration

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Risabkshetri/content-creator-s-web.git
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXT_PUBLIC_AZURE_STORAGE_URL=your_azure_storage_url
```

4. Run the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # Reusable UI components
├── features/         # Feature-specific components
├── services/        # API services
├── styles/          # Global styles
└── utils/           # Utility functions
```

## 🏗️ Deployment

The platform is deployed on Microsoft Azure. To deploy:

1. Build the application:
```bash
npm run build
```

2. Deploy to Azure using Azure CLI:
```bash
az webapp deployment source config-zip --resource-group <group-name> --name <app-name> --src dist.zip
```

## 🔗 Links

- [Live Platform](https://red-smoke-0afb13400.5.azurestaticapps.net/)
