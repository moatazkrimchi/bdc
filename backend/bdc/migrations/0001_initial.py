# Generated by Django 4.0.3 on 2022-03-04 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bdc',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('radical', models.CharField(max_length=100)),
                ('agence', models.CharField(max_length=100)),
                ('montant', models.FloatField()),
                ('taux', models.FloatField()),
                ('duree', models.IntegerField()),
                ('dateE', models.DateField()),
                ('dateP', models.DateField()),
                ('tempsR', models.IntegerField()),
                ('statut', models.CharField(max_length=100)),
            ],
        ),
    ]
