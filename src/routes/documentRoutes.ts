import express from 'express';
import { DocumentController } from '../controllers/documentController';

const router = express.Router();
const documentController = new DocumentController();

router.post('/documents', documentController.createDocument);
router.get('/documents', documentController.getAllDocuments);
router.get('/documents/:id', documentController.getDocumentById);
router.put('/documents/:id', documentController.updateDocument);

export { router as documentRouter };