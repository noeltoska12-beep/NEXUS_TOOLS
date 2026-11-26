import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	  <main class="menu">
		      <h1>NEXUS TOOLS</h1>
		          <p>Android Control Panel</p>

			      <section class="card">
				            <h2>Overlay Settings</h2>

					          <label>
							          <input type="checkbox" id="overlay">
									          Enable overlay
										        </label>

											      <label>
												              <input type="checkbox" id="fps">
														              Show FPS counter
															            </label>

																          <label>
																		          <input type="checkbox" id="crosshair">
																				          Show crosshair
																					        </label>
																						    </section>

																						        <p id="status">Status: Ready</p>
																							  </main>
																							  `

																							  document.querySelectorAll<HTMLInputElement>('input')
																								    .forEach(input => {
																								        input.addEventListener('change', () => {
																									      document.querySelector('#status')!.textContent =
																									              input.checked
																										                ? input.id + ' enabled'
																												          : input.id + ' disabled'
																													      })
																													       })
