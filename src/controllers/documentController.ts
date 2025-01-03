import { Request, Response } from 'express';
import { DocumentModel } from '../models/documentModel';

export class DocumentController {
    public async createDocument(req: Request, res: Response): Promise<void> {
        try {
            const document = await DocumentModel.create(req.body);
            res.status(201).json(document);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar documento', error });
        }
    }

    public async getAllDocuments(req: Request, res: Response): Promise<void> {
        try {
            const documents = await DocumentModel.find();
            res.status(200).json(documents);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar documentos', error });
        }
    }

    public async getDocumentById(req: Request, res: Response): Promise<void> {
        try {
            const document = await DocumentModel.findById(req.params.id);
            if (!document) {
                res.status(404).json({ message: 'Documento não encontrado' });
                return;
            }
            res.status(200).json(document);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar documento', error });
        }
    }

    public async updateDocument(req: Request, res: Response): Promise<void> {
        try {
            const document = await DocumentModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!document) {
                res.status(404).json({ message: 'Documento não encontrado' });
                return;
            }
            res.status(200).json(document);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar documento', error });
        }
    }

    public async deleteDocument(req: Request, res: Response): Promise<void> {
        try {
            const document = await DocumentModel.findByIdAndDelete(req.params.id);
            if (!document) {
                res.status(404).json({ message: 'Documento não encontrado' });
                return;
            }
            res.status(200).json({ message: 'Documento deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar documento', error });
        }
    }
}