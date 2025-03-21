
#### Synopsis: AI-Powered Document Interaction System

#### Purpose

This project is designed to enhance document accessibility by allowing users to interact with various file formats, such as `PDF, JPG, JPEG, PNG, TXT, and DOCX`. Instead of manually reading lengthy documents, users can upload their files and engage in a conversational interface to extract relevant information efficiently.

#### Key Features

- Web-based application for seamless document uploads and viewing.
- AI-powered chat functionality to interact with uploaded documents.
- Support for multiple file formats, including text and image-based documents.

#### Technologies Used

- Backend: Python, Django, Django REST Framework (DRF)
- Frontend: HTML, CSS, JavaScript
- AI & Data Processing: LangChain, Pinecone, OpenAI API
- Deployment & Infrastructure: Docker (containerization), Render (deployment)

### **Synopsis: AI-Powered Document Interaction System**

#### **Purpose**

This project is designed to enhance document accessibility by allowing users to interact with various file formats, such as `PDF, JPG, JPEG, PNG TXT, and DOCX`. Instead of manually reading lengthy documents, users can upload their files and engage in a conversational interface to extract relevant information efficiently.

#### **Key Features**

- Web-based application for seamless document uploads and viewing.

- AI-powered chat functionality to interact with uploaded documents.

- Support for multiple file formats, including text and image-based documents.

#### **Technologies Used**

- **Backend**: Python, Django, Django REST Framework (DRF)

- **Frontend**: HTML, CSS, JavaScript

- **AI & Data Processing**: LangChain, Pinecone, OpenAI API

- **Deployment & Infrastructure**: Docker (containerization), Render (deployment)

#### **Benefits of this**

- Saves time by eliminating the need to manually read lengthy documents.

- Provides an intuitive and interactive way to retrieve specific information.

- Enhances productivity for professionals dealing with extensive documentation.

#### **Project URL**

🔗 **Live Demo**: [AI-Powered Document Interaction System](https://mdalishekh-docker-ocr.onrender.com)

---

## 🌟 **Free and Public for Everyone**

This project is a **free-to-use OCR solution** available for public use. Follow the instructions below to pull and run the Docker image effortlessly.

---

### API Endpoints

1. 📄 `api/pdf-to-text/` → Extract text from PDF.

- **Method:**  `POST`

- **Body Type:**  `form-data`

- **Key:**  `file`

- ✅ **Note:** Only upload PDF files.

2.🖼️ `api/image-to-text/` → Extract text from images.

- **Method:**  `POST`

- **Body Type:**  `form-data`

- **Key:**  `file`

- ✅ **Note:** Only upload image files (`JPG, JPEG, PNG`).

#### 🚀 Pull and Run Docker Image

To pull and run the Docker image locally:

```bash

# Pull the latest image from Docker Hub

docker  pull  mdalishekh/scanxtract:latest

# Run the container with a custom name

docker  run  -d  -p  8000:8000  --name  docker-ocr  mdalishekh/scanxtract:latest
```
