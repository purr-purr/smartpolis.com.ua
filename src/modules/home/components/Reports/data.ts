import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2025',
		list: [
			{
				title: 'Інформація про структуру власності',
				link: importDoc('Structure 2025.pdf'),
			},
		],
	},
];
