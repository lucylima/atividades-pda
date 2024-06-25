from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import time

# Caminho para o ChromeDriver
driver_path = '/path/to/chromedriver'

# Inicializar o driver do Selenium
driver = webdriver.Chrome(executable_path=driver_path)

# URL da página a ser acessada
url = 'https://diario.tjba.jus.br/diario/internet/inicial.wsp?tmp.diario.nu_edicao=3586&tmp.diario.cd_caderno=&tmp.diario.cd_secao=&tmp.diario.dt_inicio=24/05/2024&tmp.diario.dt_fim=07/06/2024&tmp.diario.id_advogado=&tmp.diario.pal_chave='

# Abrir a página
driver.get(url)

# Esperar a página carregar completamente
time.sleep(5)  # Ajuste o tempo conforme necessário

# Encontrar os elementos desejados
# Este exemplo assume que os dados estão em uma tabela HTML
rows = driver.find_elements(By.XPATH, '//table/tbody/tr')

# Processar os dados
data = []
for row in rows:
    cols = row.find_elements(By.XPATH, './/td')
    cols = [col.text.strip() for col in cols]
    data.append(cols)

# Fechar o driver
driver.quit()

# Criar um DataFrame do Pandas com os dados
df = pd.DataFrame(data, columns=['Coluna1', 'Coluna2', 'Coluna3'])

# Salvar o DataFrame em uma planilha Excel
df.to_excel('output.xlsx', index=False)

print("Dados salvos com sucesso em 'output.xlsx'")
