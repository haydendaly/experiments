def assign_tasks(tasks, num_workers):
    if len(tasks) / 2 != num_workers:
        return False
    tasks.sort()
    result = []
    i, j = 0, len(tasks) - 1
    for _ in range(num_workers):
        result.append((tasks[i], tasks[j]))
        i += 1
        j -= 1
    return result

if __name__ == '__main__':
    arr = [6, 3, 2, 7, 5, 5]
    print(assign_tasks(arr, 3))