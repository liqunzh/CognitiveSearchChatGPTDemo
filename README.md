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

### Modify backend code

Go to backend/app.py, change all variables values if needed.

## To add docuement to search index

Go to backend/scripts folder, then execute the command as below.

`python predocs_cn.py <filename> --storageaccount xxx --container xxx --folder xxx --searchservice xxx --index xxx --formrecognizerservice xxx --formrecognizerkey xxx --searchkey xxx --storagekey xxx -v `

## To run locally

Copy setenv.example.cmd to setenv.cmd and add all necessary information in it.

```bash
cd frontend
npm install
npm run dev
cd ..
setenv.cmd
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
