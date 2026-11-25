import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from backend.app.database import engine, Base, SessionLocal
    from backend.app.api.endpoints import router
except ImportError:
    from app.database import engine, Base, SessionLocal
    from app.api.endpoints import router

# Ensure tables exist
Base.metadata.create_all(bind=engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    yield

app = FastAPI(
    title="IncidentIQ Backend API",
    description="Multi-Agent Technical Support Intelligence Platform with Persistent Meko Context Memory",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "service": "IncidentIQ API",
        "status": "operational",
        "version": "1.0.0",
        "docs_url": "/docs"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
