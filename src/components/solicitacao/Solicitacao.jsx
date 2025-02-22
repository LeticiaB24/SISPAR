import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Solicitacao.module.scss";
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"

function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor de uma casinha" />
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" name="" id="nome-completo" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" name="" id="empresa" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <input type="text" name="" id="descricao-reembolso" />
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesa}>
                <label htmlFor="">Tipo de Despesa</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="">Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Val. Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button>Salvar</button>
                <button> deletar</button>
              </div>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                <td> Mario Veiga Fe...</td>
                <td> WSS001</td>
                <td> 329456</td>
                <td> 21/07 </td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>Alimentação</td>
                <td>1100110002 - FIN...</td>
                <td>0003</td>
                <td>002</td>
                <td>001</td>
                <td>BRL</td>
                <td>434Km</td>
                <td>0.65</td>
                <td>242.10</td>
                <td>40.05</td>
              </tr>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                <td> João Carlos de...</td>
                <td> WSS002</td>
                <td> 987789</td>
                <td> 12/08 </td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>Desp. de viagem a...</td>
                <td>1100110102 - FIN C...</td>
                <td>0002</td>
                <td>005</td>
                <td>001</td>
                <td>USD</td>
                <td>197Km</td>
                <td>0.75</td>
                <td>109.75</td>
                <td>29.97</td>
              </tr>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /> </td>
                <td> Fernanda Lima O..</td>
                <td> WSS003</td>
                <td> 546791</td>
                <td> 15/09 </td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>Eventos de aprese...</td>
                <td>1100109002 - FIN...</td>
                <td>0001</td>
                <td>005</td>
                <td>001</td>
                <td>ARS</td>
                <td>289Km</td>
                <td>0.37</td>
                <td>106.93</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Solicitacao;