# Etude de cas sécurité SI « secu web »

[consignes (pdf)](https://teams.microsoft.com/l/file/e47613ce-619b-432e-82dd-377b4b5b75b5?tenantId=8a2f18a9-8f0e-4f76-a585-9b07b3a38dea&fileType=pdf&objectUrl=https%3A%2F%2Feduservices.sharepoint.com%2Fsites%2FM1ESI333%2FDocuments%20partages%2FSECURISATION%20DU%20CODE%2FNFConsulting_secuWeb%20I1%20MDS%20Rennes.pdf&baseUrl=https%3A%2F%2Feduservices.sharepoint.com%2Fsites%2FM1ESI333&serviceName=teams&threadId=19:44220b72aa934a5ca67aba8e06c84dc7@thread.tacv2&messageId=1614673973035&groupId=b164e3e9-dad8-4e03-badf-910b4c64802a)

## Architecture du serveur

L'application tourne en NodeJS et plusieurs instances sont créées à l'aide de PM2. NGinx est utilisé en tant que reverse proxy et permet de répartir la charge en redirigeant les utilisateurs vers une instance ou une autre à l'aide de l'algorithme "Round-robin" (tourniquet), la charge est alors répartie de manière uniforme et prend en compte les poids (si définis). D'autre méthodes de répartition de charge peuvent être configurés : "Least connections", "IP Hash", "Generic hash", "Least time".

![](./server_config.svg)

