def cube_root(k, error):
    guess = k
    while (((1/3)*(2*guess + k/guess**2))**3 - k >= error):
        guess = (1/3)*(2*guess + k/guess**2)
    return guess

if __name__ == '__main__':
    print(cube_root(125, .001))