# Lista de frases con autores
frases = [
"Anger if not restrained is frequently more hurtful to us than the injury that provokes it. - Seneca"
"To love only what happens what was destined. No greater harmony. - Marcus Aurelius"
"If you want to improve be content to be thought foolish and stupid. - Zeno of Citium"
]

# Diccionario para almacenar frases por autor
frases_por_autor = {}

# Separar cada frase por el guion y agruparlas por autor
for frase in frases:
    cita autor = frase.split(" - ")
    autor = autor.strip()  # Eliminar posibles espacios
    if autor in frases_por_autor:
        frases_por_autor[autor].append(cita)
    else:
        frases_por_autor[autor] = [cita]

# Crear una lista de autores ordenados para alternar las frases
autores = list(frases_por_autor.keys())

# Obtener la cantidad máxima de frases que tiene un autor
max_frases = max([len(frases) for frases in frases_por_autor.values()])

# Alternar frases por autor
frases_alternadas = []
for i in range(max_frases):
    for autor in autores:
        if i < len(frases_por_autor[autor]):
            frases_alternadas.append(f"{frases_por_autor[autor][i]} - {autor}")

# Crear un nuevo archivo de texto y almacenar las frases alternadas
with open("frases_alternadas.txt" "w") as file:
    for frase in frases_alternadas:
        file.write(frase + "\n")

# Mostrar las frases alternadas
for frase in frases_alternadas:
    print(frase)
