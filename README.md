# Vault Continuous Secret Deployment

Continuous secrets deployment at LesFurets using Hashicorp Vault and Ansible.

## Conferences

- 2019/04/25 - JUG @ Nantes, France
    - [Slides](https://lesfurets.github.io/vault-continuous-secret-deployment/vault-continuous-secret-deployment-nantes-jug.html)
    - Video: upcoming
- 2019/04/17 - Devoxx @ Paris, France
    - [Slides](https://lesfurets.github.io/vault-continuous-secret-deployment/vault-continuous-secret-deployment-devoxx.html)
    - Video: upcoming
- 2019/06/12 - OpenR&Day @ Paris, France
    - [Slides](https://lesfurets.github.io/vault-continuous-secret-deployment/vault-continuous-secret-deployment-openrnday.html)
    - Video: upcoming

## Deploying your application secrets: Hashicorp Vault and continuous delivery (en)

Managing application secrets, like database credentials, passphrases, salts and private keys, is hard. The availability of those elements are critical to the application, yet they need to be properly secured to reduce the attack surface on your system. Most secret management systems, like Hashicorp Vault, are used as a centralized database, but it creates a single point of failure and it requires extra care in hardening the security of that system. How about deploying your secrets, in Hashicorp Vault, alongside your application? By leveraging your build infrastructure, you can deploy a copy of your secrets in a Vault that is secured using a one-time token, accessible only by your application. In this presentation, we'll show a continuous delivery pipeline that enables that approach, talk about the implications of handling secrets in your build infrastructure, and use threat modeling to verify the security of the deployed Vault.

## Déploiement de vos secrets applicatifs : Hashicorp Vault et la livraison en continue (fr)

La gestion des secrets applicatifs, tels que les identifiants de connexion aux bases de données, les phrases secrètes ("passphrase"), les sels ("salt") et les clefs privées, est difficile. La disponibilité de ces éléments est critique au bon fonctionnement d'une application, mais ils ont besoin d'être correctement protégé afin de réduire la surface d'attaque du système. La plupart des systèmes de gestion de secrets, comme Hashicorp Vault, sont utilisés comme une base de données centralisée, mais cela devient un point de défaillance unique et nécessite un effort supplémentaire pour sécuriser l'ensemble du système. Pourquoi ne pas déployer vos secrets, avec Hashicorp Vault, en même temps que votre application ? Grâce à votre usine logicielle, il est possible de déployer une copie de vos secrets dans un Vault sécurisé par un "one time token", accessible seulement par votre application. Dans cette présentation, nous allons présenter un pipeline de livraison continue permettant cette approche, montrer les implications de la gestion de secrets dans votre infrastructure de build, et utiliser le "threat modeling" pour vérifier la sécurité du Vault déployé.

## Complement text

Cette présentation est la synthèse de l'expérience acquise suite au développement et à la mise en production de la sécurisation des secrets applicatifs chez LesFurets.com. Cet effort comprend la suppression des mots de passe et données sensibles dans le code source, la sécurisation des machines de production et la formation de l'équipe de développement sur les bonnes pratiques de sécurité, notamment sur l'usage du "threat modeling" pour les parties critiques de l'application.

This presentation is the experience feedback of the development and operations work on securing application secrets at LesFurets.com. The audience will learn about a specific real world use case and see how a development team can design a secure secret management system using Hashicorp Vault, Jenkins, Ansible and continuous delivery. No specific level is required for this talk, a developer attending will learn about the different aspects of operations, development and devops.

## Notes

- add fragment transitions (see the reveal.js github prensentation)
- add code highlight (see the reveal.js github prensetation)
- add better transitions on background and foreground for fullscreen slides

