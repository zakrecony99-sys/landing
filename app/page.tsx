"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Star, Phone, Eye, Users, Shield, Lock, MapPin, Clock, CreditCard, UserPlus } from "lucide-react"
import { useEffect, useState } from "react"

const REDIRECT_URL = "https://allgo.xyz/link/3107/57279991"

const profiles = [
  {
    id: 1,
    name: "Natalia",
    age: 24,
    location: "Warszawa",
    rating: 5.0,
    verified: true,
    status: "online",
    image: "/profile-1.jpg",
    avatar: "/profile-1.jpg",
    description: "Szukam fajnych rozmów i miłych chwil",
    interests: ["Podróże", "Film", "Fitness"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 2,
    name: "Karolina",
    age: 26,
    location: "Kraków",
    rating: 4.9,
    verified: true,
    status: "online",
    image: "/profile-2.jpg",
    avatar: "/profile-2.jpg",
    description: "Otwarta na nowe znajomości",
    interests: ["Muzyka", "Taniec", "Sztuka"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 3,
    name: "Weronika",
    age: 27,
    location: "Wrocław",
    rating: 5.0,
    verified: true,
    status: "online",
    image: "/profile-3.jpg",
    avatar: "/profile-3.jpg",
    description: "Lubię się śmiać i dobrze bawić",
    interests: ["Gotowanie", "Joga", "Kino"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 4,
    name: "Aleksandra",
    age: 22,
    location: "Poznań",
    rating: 4.8,
    verified: true,
    status: "online",
    image: "/profile-4.jpg",
    avatar: "/profile-4.jpg",
    description: "Szukam prawdziwej relacji",
    interests: ["Książki", "Wino", "Podróże"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 5,
    name: "Martyna",
    age: 29,
    location: "Gdańsk",
    rating: 4.9,
    verified: true,
    status: "online",
    image: "/profile-5.jpg",
    avatar: "/profile-5.jpg",
    description: "Energia i pozytywne wibracje",
    interests: ["Plaża", "Fotografia", "Bieganie"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 6,
    name: "Paulina",
    age: 23,
    location: "Łódź",
    rating: 5.0,
    verified: true,
    status: "online",
    image: "/profile-6.jpg",
    avatar: "/profile-6.jpg",
    description: "Dusza poszukiwaczki przygód",
    interests: ["Wspinaczka", "Narty", "Camping"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 7,
    name: "Julia",
    age: 28,
    location: "Katowice",
    rating: 4.7,
    verified: true,
    status: "online",
    image: "/profile-7.jpg",
    avatar: "/profile-7.jpg",
    description: "Spontaniczna i wesoła",
    interests: ["Koncerty", "Moda", "Fitness"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 8,
    name: "Zuzanna",
    age: 26,
    location: "Lublin",
    rating: 4.9,
    verified: true,
    status: "online",
    image: "/profile-8.jpg",
    avatar: "/profile-8.jpg",
    description: "Szukam romantycznych chwil",
    interests: ["Kolacje", "Podróże", "Taniec"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 9,
    name: "Maja",
    age: 25,
    location: "Szczecin",
    rating: 5.0,
    verified: true,
    status: "online",
    image: "/profile-9.jpg",
    avatar: "/profile-9.jpg",
    description: "Elegancka i wyrafinowana",
    interests: ["Teatr", "Galerie", "Fine Dining"],
    phone: "+48 xxx xxx xxx",
  },
  {
    id: 10,
    name: "Oliwia",
    age: 27,
    location: "Bydgoszcz",
    rating: 4.8,
    verified: true,
    status: "online",
    image: "/profile-10.jpg",
    avatar: "/profile-10.jpg",
    description: "Aktywna i pełna pasji",
    interests: ["Siłownia", "Wellness", "Sport"],
    phone: "+48 xxx xxx xxx",
  },
]

const liveRooms = [
  {
    id: 1,
    title: "Wieczorna rozmowa",
    viewers: 234,
    thumbnail: "/live-cam-room-blur.jpg",
  },
  {
    id: 2,
    title: "Prywatny pokój",
    viewers: 189,
    thumbnail: "/private-room-blur.jpg",
  },
  {
    id: 3,
    title: "Relaks i chill",
    viewers: 312,
    thumbnail: "/chill-room-blur.jpg",
  },
]

export default function LandingPage() {
  const [userLocation, setUserLocation] = useState<string>("Twojej lokalizacji")
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("[v0] User location acquired:", position.coords.latitude, position.coords.longitude)
          setUserLocation("Twojej lokalizacji")
        },
        (error) => {
          console.log("[v0] Location access denied or error:", error)
          setUserLocation("Twojej lokalizacji")
        },
      )
    }
  }, [])

  const handleActionClick = () => {
    setShowRegistrationModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 text-center border-red-600 border-2">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Załóż darmowe konto</h3>
            <p className="text-muted-foreground mb-6">
              Aby zobaczyć profile i kontaktować się z dziewczynami, musisz założyć darmowe konto. Rejestracja jest w 100% bezpłatna - bez karty kredytowej, bez ukrytych opłat!
            </p>
            <div className="flex flex-col gap-3">
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-6 text-lg">
                  Darmowa rejestracja
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent w-full"
                onClick={() => setShowRegistrationModal(false)}
              >
                Zamknij
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4" />
              Karta kredytowa nie jest wymagana
            </p>
          </Card>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Card className="overflow-hidden border-red-600 border-2 shadow-lg shadow-red-600/20">
              <div className="relative">
                <img
                  src="/profile-1.jpg"
                  alt="Wyróżniony profil"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Avatar className="h-16 w-16 border-2 border-red-600">
                    <img src="/profile-1.jpg" alt="Avatar" />
                  </Avatar>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2" />
                    Aktywna
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">Natalia, 24</h3>
                  <p className="text-white/90 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    Warszawa, 1.3 km od Ciebie
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Ona jest blisko <span className="text-red-600">{userLocation}</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2 text-base border-red-600 text-foreground">
                <Shield className="w-5 h-5 mr-2 text-red-600" />
                Zweryfikowane profile
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-base border-red-600 text-foreground">
                <Eye className="w-5 h-5 mr-2 text-red-600" />
                Prywatne galerie
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-base border-red-600 text-foreground">
                <Clock className="w-5 h-5 mr-2 text-red-600" />
                Szybko i dyskretnie
              </Badge>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6" onClick={handleActionClick}>
              Zacznij teraz
            </Button>
          </div>
        </div>
      </section>

      {/* Top Profiles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Najlepsze profile w Twojej okolicy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className="overflow-hidden border-red-600 border-2 shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 transition-shadow"
            >
              <div className="relative">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Avatar className="h-14 w-14 border-2 border-red-600">
                    <img src={profile.avatar || "/placeholder.svg"} alt={`${profile.name} avatar`} />
                  </Avatar>
                </div>
                {profile.verified && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      Zweryfikowana
                    </Badge>
                  </div>
                )}
                {profile.status === "online" && (
                  <div className="absolute top-14 right-4">
                    <Badge className="bg-green-500 text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-1" />
                      Aktywna
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">
                    {profile.name}, {profile.age}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(profile.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm font-semibold">{profile.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  {profile.location}, 1.3 km od Ciebie
                </p>

                <p className="text-sm mb-4">{profile.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.interests.map((interest, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 p-3 bg-muted rounded-lg">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span className="text-sm blur-sm select-none">{profile.phone}</span>
                  <Button size="sm" className="ml-auto bg-red-600 hover:bg-red-700 text-white" onClick={handleActionClick}>
                    Zadzwoń
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    onClick={handleActionClick}
                  >
                    Zobacz profil
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={handleActionClick}
                  >
                    <UserPlus className="w-4 h-4 mr-1" />
                    Zarejestruj się
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12" onClick={handleActionClick}>
            Zobacz więcej profili
          </Button>
        </div>
      </section>

      {/* Live Cameras Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Kamery <span className="text-red-600">na żywo</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveRooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden border-red-600 border-2 shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 transition-shadow"
            >
              <div className="relative">
                <img
                  src={room.thumbnail || "/placeholder.svg"}
                  alt={room.title}
                  className="w-full h-64 object-cover blur-md"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-red-600 text-white mb-4">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      LIVE
                    </Badge>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/70 text-white">
                    <Users className="w-4 h-4 mr-1" />
                    {room.viewers}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{room.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dołącz do ekskluzywnego pokoju ze zweryfikowaną dziewczyną
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={handleActionClick}>Wejdź do pokoju</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Dlaczego <span className="text-red-600">my?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-64 h-64 transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 120}`}
                  strokeDashoffset={`${2 * Math.PI * 120 * (1 - 0.99)}`}
                  className="text-green-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-green-500">99%</span>
                <span className="text-sm text-center mt-2 px-4">
                  Weryfikacja
                  <br />
                  autentyczności
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Moderacja 24/7</h3>
                <p className="text-muted-foreground">Nasz zespół dba o bezpieczeństwo użytkowników przez całą dobę</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bezpieczne połączenie</h3>
                <p className="text-muted-foreground">
                  Wszystkie dane są szyfrowane i chronione zgodnie z najwyższymi standardami
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lokalni ludzie</h3>
                <p className="text-muted-foreground">Poznaj dziewczyny w Twojej okolicy i umów się na spotkanie</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dyskrecja i anonimowość</h3>
                <p className="text-muted-foreground">Twoja prywatność jest naszym priorytetem - pozostań anonimowy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-red-600 text-white border-0 p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Gotowy na nowe znajomości?</h2>
          <p className="text-xl mb-8 text-white/90">Dołącz już dziś do tysięcy zadowolonych użytkowników</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-lg font-bold"
            onClick={handleActionClick}
          >
            Zacznij za darmo
          </Button>
          <div className="mt-8 flex items-center justify-center gap-3 text-white/90">
            <CreditCard className="w-6 h-6" />
            <p className="text-lg font-semibold">Rejestracja jest w 100% darmowa - karta kredytowa nie jest wymagana</p>
          </div>
        </Card>
      </section>
    </div>
  )
}
