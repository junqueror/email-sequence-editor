import clsx from 'clsx';
import React, { lazy, Suspense } from 'react';
import type { FC } from 'react';
import Divider from '~/components/layout/Divider';
import Mail from '~/assets/icons/Mail.svg?react';

import type { Email } from '~/types/email';
import 'easymde/dist/easymde.min.css';


const SimpleMDEEditor = lazy(() => import('react-simplemde-editor'));

interface NewEmailProps {
  email: Email,
  className?: string,
  onEditEmail?: ({ id, subject, content }: { id: Email['id'], subject?: Email['subject'], content?: Email['content']}) => void,
}

const NewEmail: FC<NewEmailProps> = ({
  email,
  className = '',
  onEditEmail = undefined,
}) => {
  const newEmailClassNames = clsx('border border-gray-200 rounded-xl', className);

  const editSubject = (event: React.ChangeEvent<HTMLInputElement >) => onEditEmail?.({ id: email.id, subject: event?.target?.value });
  const editContent = (value: string) => onEditEmail?.({ id: email.id, content: value });

  return (
    <div className={ newEmailClassNames }>
      <div className='flex flex-row gap-4 items-center my-4 mx-6'>
        <div className='border border-gray-200 rounded-md p-2'>
          <Mail className='size-4' />
        </div>
        <span className='font-semibold text-xl text-gray-900'>{ email.title }</span>
      </div>
      <Divider />
      <input 
        className='mx-6 w-full outline-none text-lg' 
        type='text' 
        placeholder='Subject' 
        value={ email.subject }
        onChange={ editSubject }
      />
      <Divider />
      <div className='mx-2 my-1 min-h-32'>
        <Suspense fallback={null}>
          <SimpleMDEEditor
          className={ clsx(
            '[&>.EasyMDEContainer]:!border-0', // wrapper
            '[&>.EasyMDEContainer>.CodeMirror]:!border-0', // CodeMirror
            '[&>.EasyMDEContainer>.editor-toolbar]:!border-0 [&>.EasyMDEContainer>.editor-toolbar_i]:text-gray-400 [&>.EasyMDEContainer>.editor-toolbar_button:after]:text-gray-400', // toolbar
            '[&>.EasyMDEContainer>.editor-statusbar]:hidden', // statusbar
          ) }
            value={ email.content }
            onChange={ editContent }
            options={ {
              toolbar: ['bold', 'italic', 'heading-bigger', 'heading-smaller', 'quote', 'link', 'image', 'unordered-list', 'ordered-list'],
            } }
          />
        </Suspense>
      </div>
    </div>
  );
};

export default NewEmail;

export type { NewEmailProps };
