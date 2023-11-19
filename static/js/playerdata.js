const socket = io.connect('http://localhost:1010');
_pcCharacterNames = []
_pcCharacterData = []
_npcCharacterData = []
const currentUrl = window.location.href;
const decodedUrl = decodeURIComponent(currentUrl);
const lastSlashIndex = decodedUrl.lastIndexOf('/');
const stringAfterLastSlash = decodedUrl.substring(lastSlashIndex + 1);
socket.on('connect', () => {
  console.log('Connected to server');

    socket.on('jsonData', (data) => {
    console.log('Received data from server:', data);

    _pcCharacterNames = data.PC.map(pc => pc.Name);
    _pcCharacterData = data.PC;
    _npcCharacterData = data.NPC;

    if(stringAfterLastSlash.length == 0){
      setupCT();
    }else{
      loadData(getCharacterData(stringAfterLastSlash));
    }
    generateNavigationLinks(_pcCharacterNames);

  });
  socket.emit('clientData', { message: 'Hello, server!' });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
function getCharacterNames(){
    return _pcCharacterNames;
}
function getCharacterData(cName){
  console.log(cName);
  const filteredData = _pcCharacterData.filter(item => item.Name.toLowerCase() === cName);
  return filteredData;
}
function setupCT(){
  generateCTTableRows(_npcCharacterData);
  generateCTTableRows(_pcCharacterData);
}