const inputStyle = {
  borderTop: '0'
}

const closeSearchModal = function() {
  const searchModal = document.getElementById('search-modal') as HTMLElement;

  searchModal.style.display = 'none';
}

const searchElement = function() {
  const cd = document.getElementById('code-danger') as HTMLInputElement;
  const cm = document.getElementById('code-matiere') as HTMLInputElement;

  window.location.href = `${location.href.split('/').slice(0, 3).join('/')}/cmicoscope?cd=${cd.value ?? 0}&cm=${cm.value ?? 0}`;
}

export default function SearchModal() {
  return (
    <>
      <div className='modal-background' id='search-modal'>
        <div className='modal'>
          <div className='modal-header'>
            <p className='title'>CMIC</p>

            <a className='fa-solid fa-x' onClick={closeSearchModal}/>
          </div>

          <div className='modal-body'>
            <div className='inputs'>
              <label>Codes :</label>
              <div>
                <input type='text' placeholder='Code Danger' name='code-danger' id='code-danger'/>
              </div>
              <div>
                <input type='text' placeholder='Code Matière' name='code-matiere' id='code-matiere' style={inputStyle}/>
              </div>
            </div>
          </div>

          <div className='modal-footer'>
            <a onClick={closeSearchModal}>Annuler</a>

            <button onClick={searchElement}>Rechercher</button>
          </div>
        </div>
      </div>
    </>
  )
}