from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

CHROME_PATH = "/usr/local/bin/chromedriver"
BASE_URL = "https://beta.deltaone.xyz/"
REFERRAL_ID = "NCETK7JRB"

service = Service(CHROME_PATH)
options = Options()
options.headless = True

browser = webdriver.Chrome(service=service, options=options)
browser.maximize_window()

browser.get(f"{BASE_URL}?ref_id={REFERRAL_ID}")

button = browser.find_element(By.CLASS_NAME, 'custom-button')
button.click()

email = browser.find_element(By.XPATH, "//*[contains(text(), 'Email')]")
twitter = browser.find_element(By.XPATH, "//*[contains(text(), 'Twitter')]")
stake_amount = browser.find_element(By.XPATH, "//*[contains(text(), 'How much capital are you interested in farming through Delta One?')]")

email.click()
email.send_keys("testeroni@gmail.com")
twitter.click()
twitter.send_keys("https://twitter.com/eichinger_c")
twitter.click()
stake_amount.send_keys("$1200")

button = browser.find_element(By.CLASS_NAME, 'custom-button')
button.click()

browser.quit()