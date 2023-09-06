import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider as VariableGlobalProvider } from './variableGlobal/variableGlobal';
import { GlobalProvider as VariableTradeProvider } from './variableGlobal/variableTrade';
import { GlobalProvider as VariableImageProvider } from './variableGlobal/variableImage';
import { GlobalProvider as VariableIndicateurProvider } from './variableGlobal/variableIndicateur';
import { GlobalProvider as VariableCollectionProvider } from './variableGlobal/variableCollection';
import { GlobalProvider as VariableStrategieProvider } from './variableGlobal/variableStrategie';
import { GlobalProvider as VariableRemplissageProvider } from './variableGlobal/variableRemplissage';
import { GlobalProvider as VariableTagProvider } from './variableGlobal/variableTag';
import { GlobalProvider as VariableNoteProvider } from './variableGlobal/variableNote';
import { DragDropContext } from 'react-beautiful-dnd';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profil from './pages/Profil';

function App() {
  return (
    <VariableNoteProvider>
      <VariableTagProvider>
        <VariableRemplissageProvider>
            <VariableStrategieProvider>
              <VariableCollectionProvider>
                <VariableIndicateurProvider>
                  <VariableImageProvider>
                    <VariableTradeProvider>
                      <VariableGlobalProvider>
                        <DragDropContext>
                          <Router>
                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/register" element={<Register />} />
                              <Route path="/login" element={<Login />} />
                              <Route path="/profil" element={<Profil />} />
                            </Routes>
                          </Router>
                        </DragDropContext>
                      </VariableGlobalProvider>
                    </VariableTradeProvider>
                  </VariableImageProvider>
                </VariableIndicateurProvider>
              </VariableCollectionProvider>
            </VariableStrategieProvider>
        </VariableRemplissageProvider>
      </VariableTagProvider>
    </VariableNoteProvider>
  );
}

export default App;
