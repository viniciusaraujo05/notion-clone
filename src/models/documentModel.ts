import mongoose, { Document, Schema } from 'mongoose';

export interface Block {
    type: string;
    content: Record<string, unknown>;
    order: number;
}

export interface IDocument extends Document {
    title: string;
    blocks: Block[];
    createdAt: Date;
    updatedAt: Date;
}

const BlockSchema = new Schema<Block>({
    type: { type: String, required: true },
    content: { type: Schema.Types.Mixed },
    order: { type: Number, default: 0 },
});

const DocumentSchema = new Schema<IDocument>({
    title: { type: String, required: true },
    blocks: [BlockSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const DocumentModel = mongoose.model<IDocument>('Document', DocumentSchema);