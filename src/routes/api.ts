import { Application, Request, Response } from 'express';
import { DocumentController } from '../controllers/documentController';

export class router {
    private documentController: DocumentController;

    constructor(app: Application) {
        this.documentController = new DocumentController();
        this.configureRoutes(app);
    }

    private configureRoutes(app: Application): void {
        // Rota de teste
        app.get('/', (req: Request, res: Response) => {
            res.json({ message: 'API está funcionando!' });
        });

        // Rotas de documentos
        app.post('/documents', this.documentController.createDocument);
        app.get('/documents', this.documentController.getAllDocuments);
        app.get('/documents/:id', this.documentController.getDocumentById);
        app.put('/documents/:id', this.documentController.updateDocument);
        app.delete('/documents/:id', this.documentController.deleteDocument);
    }
}
