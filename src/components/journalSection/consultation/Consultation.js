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

const Consultation = ({ miseAjourDonne }) => {

  // RAFFRAICHISSEMENT AUTO
  const { globalTrade } = useGlobalTrade();

  const headCells = [
    { id: '_id', label: 'ID' },
    { id: 'ticketNumber', label: 'Ticket number' },
    { id: 'identifier', label: 'Identifier' },
    { id: 'magicNumber', label: 'Magic number' },
    { id: 'dateAndTimeOpening', label: 'Date and time opening' },
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

  useEffect(() => {
    fetchJournalData(username, collectionValues, rechercheDonnee)
      .then(data => {setJournalData(data);})
      .catch(() => setJournalData([]));
  }, [username, collectionValues, rechercheDonnee, miseAjourJournalData, miseAjourDonne, globalTrade]);

  useEffect(() => {
    const fetchCollection = async () => {
      const collectionOptions = await fetchCollectionOptions(username);
      setCollectionOption(collectionOptions);
      setCollectionValues(collectionOptions[0].value);
    };
    fetchCollection();
  }, [username, globalTrade]);

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
      //console.log(message);
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
            <Button
              label="<"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Précédent
            </Button>
            <span>Page {currentPage}</span>
            <Button
              label=">"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= journalData.length}
            >
              Suivant
            </Button>
          </div>
        </Box>
            </div>
            {tradeAffichage === 'montre' ? (
                <div className="cadreConsultation">
                    <div className="contenuMontreConsultation">
                        <div className="info">
                            <div className="texte">
                                <p>ID: {tradeIDpopup._id}</p>
                                <p>ticketNumber: {tradeIDpopup.ticketNumber}</p>
                                <p>identifier: {tradeIDpopup.identifier}</p>
                                <p>magicNumber: {tradeIDpopup.magicNumber}</p>
                                <p>dateAndTimeOpening: {tradeIDpopup.dateAndTimeOpening}</p>
                                <p>typeOfTransaction: {tradeIDpopup.typeOfTransaction}</p>
                                <p>orderType: {tradeIDpopup.orderType}</p>
                                <p>volume: {tradeIDpopup.volume}</p>
                                <p>volume_remain: {tradeIDpopup.volume_remain}</p>
                                <p>symbol: {tradeIDpopup.symbol}</p>
                                <p>priceOpening: {tradeIDpopup.priceOpening}</p>
                                <p>stopLoss: {tradeIDpopup.stopLoss}</p>
                                <p>takeProfit: {tradeIDpopup.takeProfit}</p>
                                <p>dateAndTimeClosure: {tradeIDpopup.dateAndTimeClosure}</p>
                                <p>priceClosure: {tradeIDpopup.priceClosure}</p>
                                <p>swap: {tradeIDpopup.swap}</p>
                                <p>profit: {tradeIDpopup.profit}</p>
                                <p>commision: {tradeIDpopup.commision}</p>
                                <p>closurePosition: {tradeIDpopup.closurePosition}</p>
                                <p>Balance: {tradeIDpopup.balance}</p>
                                <p>broker: {tradeIDpopup.broker}</p>
                                <p>TPR: {tradeIDpopup.TPR}</p>
                                <p>psychologie: {tradeIDpopup.psychologie}</p>
                                <p>annonceEconomique: {tradeIDpopup.annonceEconomique}</p>
                                <p>position: {tradeIDpopup.position}</p>
                                <p>durée: {tradeIDpopup.durée}</p>
                                <p>typeOrdre: {tradeIDpopup.typeOrdre}</p>
                                <p>violeStrategie: {tradeIDpopup.violeStrategie}</p>
                                <p>sortie: {tradeIDpopup.sortie}</p>
                                <p>indicateur1: {tradeIDpopup.indicateur1}</p>
                                <p>indicateur2: {tradeIDpopup.indicateur2}</p>
                                <p>indicateur3: {tradeIDpopup.indicateur3}</p>
                                <p>strategie: {tradeIDpopup.strategie}</p>
                                <p>timeEntree: {tradeIDpopup.timeEntree}</p>
                                <p>timeSetup: {tradeIDpopup.timeSetup}</p>
                                <p>journeeDeTilt: {tradeIDpopup.journeeDeTilt}</p>
                                <p>sortieManuelle: {tradeIDpopup.sortieManuelle}</p>
                                <p className="note" dangerouslySetInnerHTML={{ __html: tradeIDpopup.note }} />
                                <hr />
                                <p>Tags</p>
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
