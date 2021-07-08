import React from 'react';
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    SubmitButton, 
    MutedLink, 
    BoldLink 
} from './common';

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const CreateTab = (e) => {
    e.preventDefault();
}

export default function TabForm() {
    return (
        <div>
            <BoxContainer>
                <FormContainer onSubmit={CreateTab}>
                    <Input 
                    type='text' 
                    placeholder='Tab Name'
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    required
                    />
                    <Input 
                    type='text' 
                    placeholder='Description'
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    required
                    />
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" >
                    Create
                </SubmitButton>
                </FormContainer>
            </BoxContainer>
        </div>
    )
}
 