import random

nombres = [
    "Brandon",
    "Charlie",
    "Irvin",
    "Jorge",
    "Josue",
    "Joyce",
    "Kathy",
    "Luis",
    "Ricardo"
]

asientos = [f"H{i}" for i in range(6, 15)]

random.shuffle(nombres)

print("{:<10} | {:<5}".format("Nombre", "Asiento"))
print("-" * 23)
for nombre, asiento in zip(nombres, asientos):
    print("{:<10} | {:<5}".format(nombre, asiento))
