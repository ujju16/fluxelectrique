#!/bin/bash

# L'option -e arrête immédiatement le script si une commande échoue (très important en Cyber/DevOps)
set -e 

# Récupère le message passé en argument, ou met un message par défaut
COMMIT_MSG=${1:-"chore: mise à jour automatique de l'interface"}

echo "⚡ [1/3] Formatage et ajout des fichiers..."
npm run lint
git add .

echo "🔒 [2/3] Création du commit signé (GPG)..."

git commit -S -m "$COMMIT_MSG"

echo "⬆️ [3/3] Push vers GitHub..."
git push origin main

echo "✅ Succès ! GitHub a reçu le code."
echo "🚀 Vercel intercepte le push et lance le build automatiquement."

# Si tu veux forcer un déploiement direct via la CLI (utile si GitHub est down)
# décommente la ligne ci-dessous (nécessite VERCEL_TOKEN dans .env.local) :
vercel --prod --token $VERCEL_TOKEN --yes
