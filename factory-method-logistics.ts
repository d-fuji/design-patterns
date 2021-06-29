abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(): string {
        const transport = this.createTransport();
        return transport.deliver()
    }
}

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck
    }
}

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship
    }
}


interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    deliver(): string {
        return 'deliver by truck';
    }
}

class Ship implements Transport {
    deliver(): string {
        return 'deliver by ship';
    }
}


function showPlanDelivery(logistics: Logistics) {
    console.log(logistics.planDelivery())
}

showPlanDelivery(new RoadLogistics)