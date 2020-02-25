
import pandas as pd
import numpy as np


def run():

	# -- LOAD FILE -- #

	filename = 'Sample Prediction Model Data_19022020.csv'
	df = pd.read_csv(filename)


	# -- Select relevant Data -- #

	df = df[['Sample ID', 'DOB', 'Date of Onset', 'Site of onset', 'El Escorial', 'Date of Diagnosis', 'Onset To Diagnosis(months)', 'Onset To Death(months)',
	'Diagnosis to Death(months)','Date of Death','Does the patient have dementia?','C9orf72 Repeat Expansion']];


	# -- Count missing cells -- #

	empty_cells_by_column = pd.DataFrame();
	empty_cells_by_column['Empty Cells'] = df.isnull().sum();
	empty_cells_by_column['Completeness %'] = 100-(df.isnull().sum()/12*100);


	empty_cells_by_row = pd.DataFrame();
	empty_cells_by_row['Sample ID'] = df.iloc[:,0];
	empty_cells_by_row['Empty Cells'] = df.isnull().sum(axis=1);
	empty_cells_by_row['Completeness %'] = 100-(df.isnull().sum(axis=1)/len(df)*100);


	print('\n\nEmpty cells per patient:\n',empty_cells_by_row ,'\n\nEmpty cells by data category:\n',empty_cells_by_column,'\n\n');


if __name__ == '__main__':
	run()


