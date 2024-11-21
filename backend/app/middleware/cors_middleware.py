from fastapi.middleware.cors import CORSMiddleware

def add_cors_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173", "https://brain-dx.vercel.app"], 
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )
