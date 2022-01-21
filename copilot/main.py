import requests
import json
import datetime
# print a function that takes in an array and returns the largest product of k contigious elements
# def find_largest_contigious_sequence(arr, k):
#     if len(arr) < k:
#         return 0
#     max_product = 0
#     for i in range(len(arr) - k + 1):
#         product = 1
#         for j in range(i, i + k):
#             product *= arr[j]
#         max_product = max(max_product, product)
#     return max_product

def get_github_repos_by_username(username):
    repos = []
    url = 'https://api.github.com/users/' + username + '/repos'
    response = requests.get(url)
    if response.status_code == 200:
        repos = json.loads(response.text)
        for repo in repos:
            print('Repo: ' + repo['name'] + ' created on: ' + str(datetime.datetime.strptime(repo['created_at'], '%Y-%m-%dT%H:%M:%SZ')))
    else:
        print('Error: ' + str(response.status_code))

def get_crypto_ticker_price(ticker):
    url = 'https://api.coinmarketcap.com/v1/ticker/' + ticker
    response = requests.get(url)
    if response.status_code == 200:
        data = json.loads(response.text)
        return data[0]['price_usd']
    else:
        print('Error: ' + str(response.status_code))

def get_goodreads_books_by_author(author, key):
    url = 'https://www.goodreads.com/author/list/' + author + '.xml?key=' + key
    response = requests.get(url)
    if response.status_code == 200:
        data = response.text
        return data
    else:
        print('Error: ' + str(response.status_code))

if __name__ == '__main__':
    get_github_repos_by_username('haydendaly')