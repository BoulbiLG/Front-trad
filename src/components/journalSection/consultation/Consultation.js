import React, { useState, useEffect } from 'react';
import Button from '../../inputComposant/Button';
import Selector from '../../inputComposant/Selector';
import Input from '../../inputComposant/Input';
import RecuperationImage from './RecuperationImage';
import '../../../css/journal/consultation.css';
import { fetchJournalData, requeteSuppressoinTag } from './API';
import { fetchCollectionOptions } from './Options';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useGlobalTrade } from '../../../variableGlobal/variableTrade';
import { useGlobalTag } from '../../../variableGlobal/variableTag';
import { useGlobalNote } from '../../../variableGlobal/variableNote';

const Consultation = ({ miseAjourDonne }) => {

  // RAFFRAICHISSEMENT AUTO
  const { globalTrade } = useGlobalTrade();
  const { globalTag } = useGlobalTag();
  const { globalNote } = useGlobalNote();

  const headCells = [
    { id: '_id', label: 'ID' },
    { id: 'ticketNumber', label: 'Ticket number' },
    { id: 'identifier', label: 'Identifier' },
    { id: 'magicNumber', label: 'Magic number' },
    { id: 'dateOpeningFormatee', label: 'Date and time opening' },
    { id: 'typeOfTransaction', label: 'Type of transaction' },
    { id: 'priceClosure', label: 'Price closure' },
    { id: 'volume', label: 'Volume' },
    { id: 'symbol', label: 'Symbol' },
    { id: 'priceOpening', label: 'Price opening' },
  ];

  const [miseAjourJournalData, setMiseAjourJournalData] = useState(0);

  const [collectionValues, setCollectionValues] = useState([]);
  const [collectionOption, setCollectionOption] = useState([]);
  const [journalData, setJournalData] = useState([]);
  const [tradeAffichage, setTradeAffichage] = useState('cache');
  const [tradeIDpopup, setTradeIDpopup] = useState();
  const [rechercheDonnee, setRechercheDonnee] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const masquerTrade = () => {
    setTradeAffichage('cache');
  };

  const afficherTrade = (selectedData) => {
    setTradeAffichage('montre');
    setTradeIDpopup(selectedData);
  };

  const username = sessionStorage.getItem('username');

  const changementSelectorChangeCollection = selectedValue => {
    setCollectionValues(selectedValue);
  };

  // RECUPERATION TRADE
  useEffect(() => {
    fetchJournalData(username, collectionValues, rechercheDonnee)
      .then(data => {setJournalData(data);})
      .catch(() => setJournalData([]));
  }, [username, collectionValues, rechercheDonnee, miseAjourJournalData, globalTrade, globalTag, globalNote]);

  // RECUPERATION COLLECTION
  useEffect(() => {
    const fetchCollection = async () => {
      const collectionOptions = await fetchCollectionOptions(username);
      setCollectionOption(collectionOptions);
      setCollectionValues(collectionOptions[0].value);
    };
    fetchCollection();
  }, [username, globalTrade, globalTag, globalNote]);

  /************************************* */

  const [columns, setColumns] = useState(headCells);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedColumns = Array.from(columns);
    const [removed] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, removed);

    setColumns(reorderedColumns);
  };

  const onDeleteTag = async (tag) => {
    try {
      const message = await requeteSuppressoinTag(tradeIDpopup._id, collectionValues, tag);
      const updatedTags = tradeIDpopup.tag.filter(t => t !== tag);
      setTradeIDpopup(prevTrade => ({ ...prevTrade, tag: updatedTags }));
      setMiseAjourJournalData(prevCounter => prevCounter + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="consultation">
      <h3>Consultation</h3>
      <div className="actionInput">
        <p>Dans quelle collection chercher</p>
        <Selector options={collectionOption}value={collectionValues}onChange={changementSelectorChangeCollection}/>
        <p>Rechercher des trades par tags</p>
        <Input placeholder="Recherchez un trade avec un tag"value={rechercheDonnee}onChange={event => {setRechercheDonnee(event.target.value);}}/>
      </div>
        <div className="carteConsultation">
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table aria-labelledby="tableTitle">
                <TableHead>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal">
                      {(provided, snapshot) => (
                        <TableRow
                          ref={provided.innerRef}
                          style={{ overflowX: 'auto' }}
                          {...provided.droppableProps}
                        >
                          {columns.map((headCell, index) => (
                            <Draggable key={headCell.id} draggableId={headCell.id} index={index}>
                              {(provided) => (
                                <TableCell
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {headCell.label}
                                </TableCell>
                              )}
                            </Draggable>
                          ))}
                        </TableRow>
                      )}
                    </Droppable>
                  </DragDropContext>
                  </TableHead>
                <TableBody>
                {journalData !== undefined && journalData.length > 1 ? (
                  journalData.slice(startIndex, endIndex).map((row) => (
                    <TableRow className='ligne' key={row.id} onClick={() => afficherTrade(row)}>
                      {columns.map((column) => (
                        <TableCell key={column.id}>{row[column.id]}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <p>Aucune donnée disponible.</p>
                )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="pagination">
            <Button label="<"onClick={() => setCurrentPage(currentPage - 1)}disabled={currentPage === 1} />
            <span>Page {currentPage}</span>
            <Button label=">"onClick={() => setCurrentPage(currentPage + 1)}disabled={endIndex >= journalData.length} />
          </div>
        </Box>
            </div>
            {tradeAffichage === 'montre' ? (
                <div className="cadreConsultation">
                    <div className="contenuMontreConsultation">
                        <div className="info">
                          <div className="texte">
                            <div className="IT"><p>ID: </p><p>{tradeIDpopup._id}</p></div>
                            <div className="IT"><p>ticketNumber: </p><p>{tradeIDpopup.ticketNumber}</p></div>
                            <div className="IT"><p>identifier: </p><p>{tradeIDpopup.identifier}</p></div>
                            <div className="IT"><p>magicNumber: </p><p>{tradeIDpopup.magicNumber}</p></div>
                            <div className="IT"><p>dateAndTimeOpening: </p><p>{tradeIDpopup.dateOpeningFormatee}</p></div>
                            <div className="IT"><p>dateAndTimeClosure: </p><p>{tradeIDpopup.dateClosureFormatee}</p></div>
                            <div className="IT"><p>typeOfTransaction: </p><p>{tradeIDpopup.typeOfTransaction}</p></div>
                            <div className="IT"><p>orderType: </p><p>{tradeIDpopup.orderType}</p></div>
                            <div className="IT"><p>volume: </p><p>{tradeIDpopup.volume}</p></div>
                            <div className="IT"><p>volume_remain: </p><p>{tradeIDpopup.volume_remain}</p></div>
                            <div className="IT"><p>symbol: </p><p>{tradeIDpopup.symbol}</p></div>
                            <div className="IT"><p>priceOpening: </p><p>{tradeIDpopup.priceOpening}</p></div>
                            <div className="IT"><p>stopLoss: </p><p>{tradeIDpopup.stopLoss}</p></div>
                            <div className="IT"><p>takeProfit: </p><p>{tradeIDpopup.takeProfit}</p></div>
                            <div className="IT"><p>priceClosure: </p><p>{tradeIDpopup.priceClosure}</p></div>
                            <div className="IT"><p>swap: </p><p>{tradeIDpopup.swap}</p></div>
                            <div className="IT"><p>profit: </p><p>{tradeIDpopup.profit}</p></div>
                            <div className="IT"><p>commision: </p><p>{tradeIDpopup.commision}</p></div>
                            <div className="IT"><p>closurePosition: </p><p>{tradeIDpopup.closurePosition}</p></div>
                            <div className="IT"><p>Balance: </p><p>{tradeIDpopup.balance}</p></div>
                            <div className="IT"><p>broker: </p><p>{tradeIDpopup.broker}</p></div>
                            <div className="IT"><p>TPR: </p><p>{tradeIDpopup.TPRFormatee}</p></div>
                            <div className="IT"><p>psychologie: </p><p>{tradeIDpopup.psychologie}</p></div>
                            <div className="IT"><p>annonceEconomique: </p><p>{tradeIDpopup.annonceEconomiqueFormatee}</p></div>
                            <div className="IT"><p>position: </p><p>{tradeIDpopup.position}</p></div>
                            <div className="IT"><p>durée: </p><p>{tradeIDpopup.durée}</p></div>
                            <div className="IT"><p>typeOrdre: </p><p>{tradeIDpopup.typeOrdre}</p></div>
                            <div className="IT"><p>violeStrategie: </p><p>{tradeIDpopup.violeStrategieFormatee}</p></div>
                            <div className="IT"><p>sortie: </p><p>{tradeIDpopup.sortie}</p></div>
                          </div>
                          <div className="complementaire">
                            <div className="IT"><p>indicateur1: </p><p>{tradeIDpopup.indicateur1}</p></div>
                            <div className="IT"><p>indicateur2: </p><p>{tradeIDpopup.indicateur2}</p></div>
                            <div className="IT"><p>indicateur3: </p><p>{tradeIDpopup.indicateur3}</p></div>
                            <div className="IT"><p>strategie: </p><p>{tradeIDpopup.strategie}</p></div>
                            <div className="IT"><p>timeEntree: </p><p>{tradeIDpopup.timeEntree}</p></div>
                            <div className="IT"><p>timeSetup: </p><p>{tradeIDpopup.timeSetup}</p></div>
                            <div className="IT"><p>journeeDeTilt: </p><p>{tradeIDpopup.journeeDeTilt}</p></div>
                            <div className="IT"><p>sortieManuelle: </p><p>{tradeIDpopup.sortieManuelleFormatee}</p></div>
                            <h4>Notes</h4>
                            <p className="note" dangerouslySetInnerHTML={{ __html: tradeIDpopup.note }} />
                            <br />
                            <hr />
                            <br />
                            <h4>Tags</h4>
                            <div className='tagConteneur'>
                            {tradeIDpopup && tradeIDpopup.tag && tradeIDpopup.tag.map((tag, index) => (
                              <div className='tagInfo' key={index}>
                                <p>{tag}</p>
                                <button onClick={() => onDeleteTag(tag)}>x</button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="photo">
                            <RecuperationImage imageIds={[tradeIDpopup._id]}/>
                        </div>      
                      </div>
                      <div className="basConsultation">
                        <Button label='Fermer' onClick={masquerTrade}/>
                      </div>
                    </div>
                </div>
            ) : null}
        </div>           
    );
}

export default Consultation;
