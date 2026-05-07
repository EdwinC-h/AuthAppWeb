# Login Fullstack con Firebase y Supabase

Este ZIP contiene dos ejercicios completos para clase:

1. `firebase-login-fullstack`: React/Vite + Express + Firebase Auth + Firestore.
2. `supabase-login-fullstack`: React/Vite + Express + Supabase Auth + PostgreSQL.

Cada proyecto tiene:

- `frontend/`: formulario de email y clave, registro, login, logout y CRUD de productos protegido.
- `backend/`: API Express con validación de token y CRUD.
- `.env.example`: plantilla de variables de entorno.

## Requisitos

- Node.js 18 o superior.
- Proyecto creado en Firebase o Supabase.
- En Firebase: habilitar Authentication con Email/Password y crear Firestore.
- En Supabase: habilitar Auth Email/Password y ejecutar el SQL incluido en `supabase-login-fullstack/backend/schema.sql`.

## Ejecución rápida

Abre dos terminales por proyecto.

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Luego abre:

```text
http://localhost:5173
```
## Integrantes
Edwin Chusin
Ismael Narvaez
Joel Acosta
## Capturas de pantalla 
<img width="695" height="590" alt="Capture_2026-05-06_22-49-10" src="https://github.com/user-attachments/assets/c0920af4-fb97-4c14-ac65-68160c375b32" />
<img width="710" height="338" alt="Capture_2026-05-06_22-48-26" src="https://github.com/user-attachments/assets/a67c5821-675c-4b5d-b798-5a7dc364e8b8" />
<img width="929" height="467" alt="Capture_2026-05-06_22-48-02" src="https://github.com/user-attachments/assets/511ade6f-20b2-445f-a48e-e6007d102a13" />
<img width="955" height="555" alt="Capture_2026-05-06_22-47-01" src="https://github.com/user-attachments/assets/c08a1e40-2c0d-4cb8-a934-99191629ab68" />

## Importante

Los archivos `.env` reales no se incluyen por seguridad. Debes copiarlos desde `.env.example` y llenar tus credenciales.
