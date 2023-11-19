function loadData(data){
    data = data[0];
    document.querySelector('.character-info').innerHTML = `
    <h2>Character Information</h2>
    <p><strong>Name:</strong> ${data.Name}</p>
    <p><strong>Race:</strong> ${data.Race}</p>
    <p><strong>Class:</strong> ${data.Class}</p>
    <!-- Display other character details using paragraphs or appropriate HTML elements -->
  `;
  
  document.querySelector('.abilities').innerHTML = `
    <h2>Abilities</h2>
    <ul>
      <li><strong>Strength:</strong> ${data.Strength}</li>
      <li><strong>Dexterity:</strong> ${data.Dexterity}</li>
      <li><strong>Constitution:</strong> ${data.Constitution}</li>
      <li><strong>Intelligence:</strong> ${data.Intelligence}</li>
      <li><strong>Wisdom:</strong> ${data.Wisdom}</li>
      <li><strong>Charisma:</strong> ${data.Charisma}</li>
      <li><strong>Strength Modifier:</strong> ${data.StrModifier}</strong> </li>
      <li><strong>Dexterity Modifier:</strong> ${data.DexModifier}</li>
      <li><strong>Constitution Modifier:</strong> ${data.ConModifier}</li>
      <li><strong>Intelligence Modifier:</strong> ${data.IntModifier}</li>
      <li><strong>Wisdom Modifier:</strong> ${data.WisModifier}</li>
      <li><strong>Charisma Modifier:</strong> ${data.ChaModifier}</li>
    </ul>
  `;
  document.querySelector('.additional-details').innerHTML = `
  <h2>Additional Details</h2>
  <p><strong>AC (Armor Class):</strong> ${data.AC} </p>
  <p><strong>Initiative:</strong> ${data.Initiative} </p>
  <p><strong>Speed:</strong> ${data.Speed} </p>
  <p><strong>Passive Perception:</strong> ${data.PassivePerception}</p>
`;
}
