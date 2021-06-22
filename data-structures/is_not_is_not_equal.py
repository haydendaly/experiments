import time

pride = open("data/pride_and_prejudice.txt", "r").read()
ulysses = open("data/ulysses.txt").read()

pride = pride[5000:70000]
ulysses = ulysses[4000:69000]

time.sleep(1)
total = 0
for i in range(1, 101):
    start = time.perf_counter()
    for _ in range(10000000):
        n1 = pride != ulysses
    end = time.perf_counter()
    total += start - end
print(total / 100)

time.sleep(1)
total = 0
for i in range(1, 101):
    start = time.perf_counter()
    for _ in range(10000000):
        n2 = not pride == ulysses
    end = time.perf_counter()
    total += start - end
print(total / 100)