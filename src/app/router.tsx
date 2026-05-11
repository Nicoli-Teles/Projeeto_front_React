// src/app/router.tsx
// Objetivo: centralizar as rotas principais do fluxo guest-first do aplicativo.

import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";
import { Inicio } from "../pages/Inicio.tsx";
import { Login } from "../pages/Login";
import { CriarConta } from "../pages/CriarConta";
import { Assinatura } from "../pages/Assinatura";
import { Destaques } from "../pages/Destaques";
import { CategoriaTechno } from "../pages/CategoriaTechno";
import { Paginas } from "../pages/Paginas.tsx";
import { CriarPost } from "../pages/CriarPost.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Inicio />,
            },
            {
                path: "Login",
                element: <Login />,
            },
            {
                path: "CriarConta",
                element: <CriarConta />,
            },
            {
                path: "Assinatura",
                element: <Assinatura />,
            },
            {
                path: "Destaques",
                element: <Destaques />,
            },
            {
                path: "CategoriaTechno",
                element: <CategoriaTechno />,
            },
            {
                path: "Paginas",
                element: <Paginas />,
            },

            {
                path: "CriarPost",
                element: <CriarPost />,
            },

        ],
    },
]);