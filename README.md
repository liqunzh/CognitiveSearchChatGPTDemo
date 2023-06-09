# CognitiveSearchChatGPTDemo

Combine Cognitive Search, Bing Search, TTS, STT with ChatGPT to provide Q&amp;A chatbot

This is a demo application build upon this Github repo.

Visit https://github.com/Azure-Samples/azure-search-openai-demo

## Preview

![Preview](/docs/images/Slide2.JPG)
![Preview](/docs/images/Slide3.JPG)
![Preview](/docs/images/Slide4.JPG)

## Setup

### Dependencies

- Python 3.10+
- Node.js 14+
- Azure CLI
- Azure Subscription
- Azure Cognitive Search
- Azure Bing Search Service
- Azure Speech Service
- Azure Form Recognizer

### Prerequisites

Install python libraries

```bash
pip install -r requirements.txt
```

Build front end

```bash
cd frontend
npm install
npm run build
```

### Create Azure resources

## To run locally

```bash
cd frontend
npm install
npm run build
cd ..
cd backend
python app.py
```

## To deploy to Azure

Open Azure portal and navigate to your web app resource.  Click on the Deployment Center and select GitHub as the source.  Select the repository and branch you want to deploy.  Click on Save and deploy.  The web app will be deployed to Azure.

**Note:** before deploying to Azure, you should remove these two lines in `app.py`:

```python
from dot_env import load_dotenv
load_dotenv()
```
