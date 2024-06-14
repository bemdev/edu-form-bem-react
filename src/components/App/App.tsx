import React from 'react';
import './App.css';

import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

import QuestionsWidget from '../QuestionsWidget/QuestionsWidget';
import { QUESETIONS } from './mock';

configureRootTheme({ theme })

const App = () => {
  return (
    <div className="App">
      <QuestionsWidget title='Тестирование' timeOff={1020} questions={QUESETIONS} />
    </div>
  );
}

export default App;
