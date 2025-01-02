import mongoose, { Schema, Document } from 'mongoose';

// Interface para representar um documento
export interface IDocumentSimple extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const DocumentSchemaSimple: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export const DocumentModelSimple = mongoose.model<IDocumentSimple>('DocumentSimple', DocumentSchemaSimple);