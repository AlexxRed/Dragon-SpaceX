import { FC } from 'react';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import { Box, CreateNote, FormTitle, FormButton, InputForm, LableForm, Wrapper, FormText } from './CreateForm.styled';
import createdNoteValidation from '../../services/consts/validation/createdNoteValidation';
import { INote } from '../../services/types/note.types';
import { COLORS } from '../../services/theme';
import { useNavigate } from "react-router-dom";

interface IProps {
    data: INote;
    onSave: (item: INote) => void;
    title: string;
}

const CreateFormComponent: FC<IProps> = ({ data, onSave, title }) => {
    const navigate = useNavigate();

    const handleSubmit = (values: INote, { resetForm }: FormikHelpers<INote>) => {
        onSave(values);
        resetForm();
        navigate('/')
    };

    const renderError = (message: string) => <div style={{ color: COLORS.red }}>{message}</div>;

    return (
    <Box>
        <FormTitle>{title}</FormTitle>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={createdNoteValidation}>
                
                <CreateNote autoComplete="off">
                <FormText>Category</FormText>
                <Wrapper>
                    <LableForm htmlFor="task">
                        Task
                        <InputForm type="radio" name="category" value="Task" />
                    </LableForm>
                            <ErrorMessage name="task" render={renderError} />
                    <LableForm htmlFor="randomthought">
                        Random Thought
                        <InputForm type="radio" name="category" value="Random Thought" />
                    </LableForm>
                            <ErrorMessage name="randomthought" render={renderError} />
                    <LableForm htmlFor="idea">
                        Idea
                        <InputForm type="radio" name="category" value="Idea" />
                    </LableForm>
                            <ErrorMessage name="idea" render={renderError} />
                </Wrapper>
                <LableForm htmlFor="name">
                    <FormText>Name</FormText>
                    <InputForm type="text" name="name" placeholder="Note name" />
                </LableForm>
                <ErrorMessage name="name" render={renderError} />
                        
                <LableForm htmlFor="content">
                    <FormText>Description</FormText>
                    <InputForm
                    component="textarea"
                    rows="5"
                    name="content"
                    placeholder="Your Note here"
                    />
                </LableForm>
                <ErrorMessage name="content" render={renderError} />

                <LableForm htmlFor="dates">
                    <FormText>Choose a date</FormText>
                    <InputForm type="date" name="dates"/>
                </LableForm>
                <ErrorMessage name="dates" render={renderError} />
                    {title === 'Create Note' ? (
                        <FormButton type="submit">Create</FormButton>
                    ) : (
                        <FormButton type="submit">Edit</FormButton>
                    )}
                    </CreateNote>
        </Formik>
        </Box>
    );
};

export default CreateFormComponent;